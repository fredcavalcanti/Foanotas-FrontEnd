import React from 'react';

let Card = props =>{
    return(
        <div className="column is-one-third">
            <div className="card large arred">
                {new Date().getDay() === props.diaSemana ? <div className="card-header subTitle-header-edit">
                    <span className="card-header-title is-centered subTitleStyle">(Aula Hoje!)</span>
                </div> : <div className="card-header subTitle-header-edit">
                    <span className="card-header-title is-centered subTitleStyle2"></span>
                </div> }
                <div className="card-header title-header-edit">
                    <span className="card-header-title is-centered titleStyle">{`${props.codMateria} - ${props.materia}`}</span>
                </div>
                <div className="card-content">
                    <div className="columns is-mobile">
                    <div className="column to-center">
                        <span className="bd-notification is-primary falta-style">{`${props.suasFaltas || 0 } Faltas / ${props.limiteFaltas} Faltas`}</span>
                    </div>
                    </div>
                </div>
                <div className="content along-content">
                    <div className="columns is-mobile">
                    <div className="column to-center organize">
                        <span className="bd-notification is-primary inside-content"> 
                        { props.horarioInicio ? <div><p>Horário de Início:{ props.horarioInicio}</p><p>Horário do Término: { props.horarioFim } </p></div> : <p>Nenhum Horário Encontrado</p> }
                        </span>
                    </div>
                    </div>
                </div>
                <div className="columns is-mobile">
                    <div className="column to-center organize">
                    <button className="button is-link is-small is-info" onClick={() => props.materialShow(props.index)} >Consultar Material</button>
                    </div>
                </div>
                <div className="card-footer to-center footer-style">
                    <span className="text-white font-weight-bold mg-0">Nenhuma nota encontrada</span>
                </div>
            </div>
        </div>
    );
}

export default Card;