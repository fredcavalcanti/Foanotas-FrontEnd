import React from 'react';

import Input from './Input';
import { Button, ButtonDisabled } from './Button';

let Loginform = props => {
    let { loginOnFoa, vars, handlerChange } = props;
    return(
        <section className="hero is-success is-fullheight">
        <div className="hero-body">
            <div className="container has-text-centered">
                <div className="column is-4 is-offset-4 up-container">
                    <div className="box">
                        <figure className="avatar">
                            <img className="avatarConfig" name="matricula2" alt="Avatar Login" src={ (vars.matricula).length === 9 ? `https://sites.unifoa.edu.br/portal/FotosDRA/${vars.matricula}.jpg` : `https://i.stack.imgur.com/qwf7L.png` } onError={evt=>handlerChange('','matricula')} />
                        </figure>
                        <h3 className="login-text">Login</h3>
                        <form onSubmit={loginOnFoa}>
                            <Input className="input is-medium" type="text" placeholder="Matrícula" value={vars.matricula} onChange={evt=>handlerChange(evt.target.value,'matricula')} disabled={vars.activeInputs} />
                            {
                                (vars.matricula).length === 9 ? 
                                <section>
                                    <Input className="input is-medium slide-top" type="password" placeholder="Senha" value={vars.password} onChange={evt=>handlerChange(evt.target.value,'password')} />
                                    <Button className={vars.classButton} text="Entrar"/> 
                                </section>
                                : 
                                <ButtonDisabled text="Entrar"/>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Loginform;