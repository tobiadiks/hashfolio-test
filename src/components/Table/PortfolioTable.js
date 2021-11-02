import { Image } from "react-bootstrap"

export const PortfolioTable=(props)=>{
    return(<>     

<tr>
<td className="text-center my-auto"><Image className="icons mt-2" fluid roundedCircle src={props.img} alt="logo"/></td>
<td>
    <ul className="list-unstyled mt-2">
        <li className=" justify-content-between"><span className="text-secondary text-xs-left xsub-emphasis m-3">Basket:</span><span className=" emphasis">{props.name}</span></li>
        <li className=" justify-content-between"><span className="text-secondary text-xs-left xsub-emphasis m-3">Assets:</span><span className="sub-emphasis text-muted">{props.assets.map(data=>data.coin_name+',')}</span></li>
        <li className=" justify-content-between"><span className="text-secondary text-xs-left xsub-emphasis m-3">Manager:</span><span className="mid-emphasis text-muted">{props.manager}</span></li>
    </ul>
</td>

<td>
    <ul className="list-unstyled mt-2">
    <li className=" justify-content-between col"><div className="text-secondary text-xs-left xsub-emphasis text-center">Investment</div><div className="text-lg-left text-weight-bold text-center bold sub-emphasis">#23,000</div></li>
    </ul>
</td>

<td>
    <ul className="list-unstyled mt-2">
    <li className=" justify-content-between col"><div className="text-secondary text-xs-left xsub-emphasis text-center">Current Value</div><div className="text-lg-left text-weight-bold text-center bold sub-emphasis">#3,000</div></li>
    </ul>
</td>

<td>
    <ul className="list-unstyled mt-2">
    <li className=" justify-content-between col"><div className="text-secondary text-xs-left xsub-emphasis text-center">Investment</div><div className="text-lg-left text-weight-bold text-center bold sub-emphasis text-success">1117.90%</div></li>
    </ul>
</td>
                </tr>
</>
              
    )
}