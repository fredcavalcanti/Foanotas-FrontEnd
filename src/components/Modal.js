import React from 'react';

let Modal = props => {
    let { materialFiltrado, closeModal } = props;
    
    let downloadAll = () => materialFiltrado.length > 0 ? materialFiltrado.map( a => (a.apoio[0].url['$link']['href'])).forEach( link => window.open(link,'_blank','width=300,height=300')) : "";
    
    let renderModal = (elem,index) => {
        if(elem && elem.data && elem.assunto && elem.apoio){
          return(
                <tbody key={index}>
                  <tr>
                    <th>{`${new Date(elem.data).getDate()}/${new Date(elem.data).getMonth()}/${new Date(elem.data).getFullYear()}`}</th>
                    <td>{elem.assunto}</td>
                    {(elem.apoio).map((item,indexT) =><td key={indexT}><a href={item['url']['$link']['href']} target="_blank" download="arquivo">Download</a></td>)}
                  </tr>
                </tbody>
          )
        }else{
          return ( 
            <tbody key={index}>
                <tr>
                    <th colSpan='3'>Nenhum Material Encontrado</th>
                </tr>
            </tbody>
          )
        }
      }

    return(
        <div className="modal">
            <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Material de Apoio</p>
                        <button className="delete" aria-label="close" onClick={closeModal}></button>
                    </header>
                    <section className="modal-card-body">
                        <table className="table is-fullwidth">
                            <thead>
                                <tr>
                                    <th>
                                        <abbr title="Data">Data</abbr>
                                    </th>
                                    <th>
                                        <abbr title="Descrição">Descrição</abbr>
                                    </th>
                                    <th>
                                        <abbr title="Anexos">Anexos</abbr>
                                    </th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>
                                        <abbr title="Data">Data</abbr>
                                    </th>
                                    <th>
                                        <abbr title="Descrição">Descrição</abbr>
                                    </th>
                                    <th>
                                        <abbr title="Anexos">Anexos</abbr>
                                    </th>
                                </tr>
                            </tfoot>
                            {materialFiltrado.length > 0  ?  materialFiltrado.map(renderModal) : [0].map(renderModal)}
                        </table>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-link is-small is-info" onClick={() => downloadAll()} >Baixar todos Anexos</button>
                    </footer>
            </div>
        </div>
    );
}

export default Modal;