import React, { useEffect, useState } from 'react';
import Serie from "./serie";

import {FormattedMessage} from 'react-intl';

const  SerieList = () => {

    const [data, setdata]= useState({});
    
    useEffect( () =>{

        if (!navigator.onLine){

            if(localStorage.getItem("data")===null)
            {
                setdata("Estas sin conexión pero se te muestra esta ventana :D, solo si no tienes cargado algo en el local storage referente a lo que buscas");
            } else{
                setdata(localStorage.getItem("data"));
            }
        } else{

           
                if(this.props.locale ==="en"){
                    const URL = "https://gist.githubusercontent.com/josejbocanegra/5dc69cb7feb7945ef58b9c3d84be2635/raw/64146e99e4416da3a8be2e2da4156cb87b3f6fd0/series-en.json  ";
                    fetch(URL).then(res => res.json()).then(res => {

                        console.log(res);
                        setdata(res.data);
        
                        localStorage.setItem("data", res.data);
                        
                        
        
                    })
                } else {
                    const URL = "https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/d9eb0701f6b495dac63bbf59adc4614a9eb5fbc8/series-es.json";
                    fetch(URL).then(res => res.json()).then(res => {

                        console.log(res);
                        setdata(res.data);
        
                        localStorage.setItem("data", res.data);
                        
                        
        
                    })
                }
            
            }
            
            


        

    }, [] )
  

  
    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col"><FormattedMessage id="Name"/></th>
              <th scope="col"><FormattedMessage id="Channel"/></th>
              <th scope="col"><FormattedMessage id="Description"/></th>
            </tr>
          </thead>
          <tbody>
              {this.data.map( (e,i) => <Serie key={i} data={e}/>)}
          </tbody>
        </table>
      </div>
    );
  
}

export default SerieList;