import React, { useState } from 'react';
import Axios from 'axios';

import './css/login.css';
import Loginform from '../components/Loginform';
import Card from '../components/Card';
import Modal from '../components/Modal';
import Footer from '../components/Footer';

const BASEURL = 'https://notasfoa.herokuapp.com';

let Login = () => {
    let [vars, setVars] = useState({
      logged:false,
      indexOut:0,
      matricula:'',
      password:'',
      classButton:'button is-link has-text-centered is-medium',
      activeInputs:false
   })
   let [dados, setDados] = useState([])
   let [materiaisAp, setMateriaisAp] = useState([])
   let [materialFiltrado, setMaterialFiltrado] = useState([])

   let handlerChange = (value,variable) => {
     setVars({...vars,[variable]: value})
    };

    let loginOnFoa = async evt => {
      evt.preventDefault();
      setVars({...vars,classButton:'button is-link has-text-centered is-medium is-loading',activeInputs:true})
      try{
        let dadosResponse = await Axios.post(`${BASEURL}/data`,{matricula:vars.matricula,senha:vars.password});
        if(dadosResponse){
          setDados(dados=dadosResponse.data);
          await setMaterialFiltrado(materialFiltrado=dados.map((elem,i) =>elem.materaisDeApoio));
          await setMateriaisAp(materiaisAp=dados.map((elem,i) =>elem.materaisDeApoio));
          setVars({...vars,logged:true})
        }
      }catch(err){
        setVars({...vars,classButton:'button is-link has-text-centered is-medium',activeInputs:false,password:''});
        alert('Usuário ou senha incorreto.')
      }
    }

    let closeModal = () => document.querySelector('div.modal.is-active').setAttribute('class','modal');

    window.onclick = function(event) {
      if(event.target === document.querySelector('div.modal-background')){
        closeModal();
      }
    }

    let materialShow = num =>{
      setMaterialFiltrado(materialFiltrado=materiaisAp[num]);
      document.querySelector('div.modal').setAttribute('class','modal is-active');
    }

    let renderHoje = (elem,index) =>{
      if(elem.diaSemana === new Date().getDay()){
        return (<Card key={index} index={index} diaSemana={elem.diaSemana} codMateria={elem.codMateria} materia={elem.materia} suasFaltas={elem.suasFaltas} limiteFaltas={elem.limiteFaltas} horarioInicio={elem.horarioInicio} horarioFim={elem.horarioFim} materialShow={materialShow} />)
      }
    }
    
    let renderOtherDays = (elem,index) =>{
      if(elem.diaSemana !== new Date().getDay()){
        return (<Card key={index} index={index} diaSemana={elem.diaSemana} codMateria={elem.codMateria} materia={elem.materia} suasFaltas={elem.suasFaltas} limiteFaltas={elem.limiteFaltas} horarioInicio={elem.horarioInicio} horarioFim={elem.horarioFim} materialShow={materialShow} />)
      }
    }

    if(!vars.logged){
        return (
          <Loginform loginOnFoa={loginOnFoa} matricula={vars.matricula} password={vars.password} vars={vars} handlerChange={handlerChange}/>
      );
    }else{
      return(
        <section>
          <Modal closeModal={closeModal} materialFiltrado={materialFiltrado} />
          <div className="container">
            <div className="section">
              <div className="row columns is-multiline">
                {(dados).map(renderHoje)}
                {(dados).map(renderOtherDays)}
              </div>
            </div>
          </div>
          <Footer/>
        </section>
      );
    }
}

export default Login;