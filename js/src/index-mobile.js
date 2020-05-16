import React from 'react'
import ReactDOM from 'react-dom'
import {ItemList, InitialItem} from './env';

//Коды сортамента
//1 - Круг
//2 - Квадрат
//3 - Лист/Плита
//4 - Труба круглая
//5 - Труба профильная
//6 - Швеллер
//7 - Шестигранник
//8 - Двутавр
//9- Уголок
class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            metalls:ItemList,
            active:InitialItem,
               activeprofile:1,
               selectvalue:"2710",
               dvalue:0,
               nvalue:0,
               hvalue:0,
               kvalue:0,
               lvalue:0,
               svalue:0,
               result:""
        };
    };
    handleListClick(item){
        const state=Object.assign({}, this.state);
        state.selectvalue=item.group[0].density;
        state.active=item;
        this.setState(state);
    }
    handleSelectListChange(event) {
         const id=event.target.value;
         const data=this.state.metalls;
         for (let i in data) {
             let ar_id=data[i].id.toString();
             if (ar_id===id) {
                 this.setState({active:data[i]})
             }
         }
    }

    handleSelectChange(event){
        this.setState({selectvalue: event.target.value});
    }
    handleProfileClick(item){
        this.setState({
            activeprofile:item
        })
    };
    handleDChange(event) {
        this.setState({dvalue: event.target.value});
    };

    handleHChange(event) {
        this.setState({hvalue: event.target.value});
    };

    handleNChange(event) {
        this.setState({nvalue: event.target.value});
    }
    handleLChange(event) {
        this.setState({lvalue: event.target.value});
    }
    handleKChange(event) {
        this.setState({kvalue: event.target.value});
    }
    handleSChange(event) {
        this.setState({svalue: event.target.value});
    }
    handleCalculate(profile){
        switch (profile) {
            case 1:{
                const d=Number(this.state.dvalue);
                const n=Number(this.state.nvalue);
                const V=(3.14*((d*d)/4)*n)/1000000000;
                const dens=Number(this.state.selectvalue);
                const M=(V*dens).toFixed(5);
                return this.setState({result:String(M)})
            }
            case 2:{
                const h=Number(this.state.hvalue);
                const n=Number(this.state.nvalue);
                const V=(h*h*n)/1000000000;
                const dens=Number(this.state.selectvalue);
                const M=(V*dens).toFixed(5);
                return this.setState({result:String(M)})
            }
            case 3:{
                const h=Number(this.state.hvalue);
                const k=Number(this.state.kvalue);
                const l=Number(this.state.lvalue);
                const V=(h*k*l)/1000000000;
                const dens=Number(this.state.selectvalue);
                const M=(V*dens).toFixed(5);
                return this.setState({result:String(M)})
            }
            case 4:{
                const d=Number(this.state.dvalue);
                const k=Number(this.state.kvalue);
                const n=Number(this.state.nvalue);
                const V=(3.14*n*k*(d+k))/1000000000;
                const dens=Number(this.state.selectvalue);
                const M=(V*dens).toFixed(5);
                return this.setState({result:String(M)})
            }
            case 5:{
                const h=Number(this.state.hvalue);
                const l=Number(this.state.lvalue);
                const k=Number(this.state.kvalue);
                const n=Number(this.state.nvalue);
                const V=((h*l*n)-((h-2*k)*(l-2*k)*n))/1000000000;
                const dens=Number(this.state.selectvalue);
                const M=(V*dens).toFixed(5);
                return this.setState({result:String(M)})
            }
            case 6:{
                const h=Number(this.state.hvalue);
                const l=Number(this.state.lvalue);
                const k=Number(this.state.kvalue);
                const n=Number(this.state.nvalue);
                const V=((h*l*n)-((h-2*k)*(l-k)*n))/1000000000;
                const dens=Number(this.state.selectvalue);
                const M=(V*dens).toFixed(5);
                return this.setState({result:String(M)})
            }
            case 7:{
                const h=Number(this.state.hvalue);
                const n=Number(this.state.nvalue);
                const V=(((3*1.7320508)/2)*h*h*n)/1000000000;
                const dens=Number(this.state.selectvalue);
                const M=(V*dens).toFixed(5);
                return this.setState({result:String(M)})
            }
            case 8:{
                const h=Number(this.state.hvalue);
                const l=Number(this.state.lvalue);
                const k=Number(this.state.kvalue);
                const s=Number(this.state.svalue);
                const n=Number(this.state.nvalue);
                const V=((h*l*n)-((h-2*k)*(l-s)*n))/1000000000;
                const dens=Number(this.state.selectvalue);
                const M=(V*dens).toFixed(5);
                return this.setState({result:String(M)})
            }
            case 9:{
                const h=Number(this.state.hvalue);
                const l=Number(this.state.lvalue);
                const k=Number(this.state.kvalue);
                const n=Number(this.state.nvalue);
                const V=((h*l*n)-((h-k)*(l-k)*n))/1000000000;
                const dens=Number(this.state.selectvalue);
                const M=(V*dens).toFixed(5);
                return this.setState({result:String(M)})
            }
        }

    };
    handleOnBlurN(value){
        if (!value) {
            this.setState({nvalue:0})
        }
    }
    handleOnBlurH(value){
        if (!value) {
            this.setState({hvalue:0})
        }
    }
    handleOnBlurL(value){
        if (!value) {
            this.setState({lvalue:0})
        }
    }
    handleOnBlurS(value){
        if (!value) {
            this.setState({svalue:0})
        }
    }
    handleOnBlurK(value){
        if (!value) {
            this.setState({kvalue:0})
        }
    }
    handleOnBlurD(value) {
        if (!value) {
            this.setState({dvalue:0})
        }
    }
    render() {

        return(
            <div className="upFlexBox">
                <div className="top-box">
                    <div className="list-container">
                        <div className="container-header">
                            <div className="header-back"><h3>ВЫБОР МАТЕРИАЛА</h3></div>
                        </div>
                        <div className="materials-list">
                            <div>
                                <select value={this.state.active.id} onChange={this.handleSelectListChange.bind(this)}>
                                    {this.state.metalls.map((item, i)=>{
                                        return <option key={i} value={item.id}>{item.name}</option>
                                    })}
                                </select>

                            </div>
                        </div>
                        <div className="marks">УКАЖИТЕ МАРКУ</div>
                        <div className="marks-wrapper">
                        <select value={this.state.selectvalue} onChange={this.handleSelectChange.bind(this)}>
                            {this.state.active.group.map((index, i)=>{
                                return <option key={i} value={index.density}>{index.name}</option>
                            })}
                        </select>
                        </div>
                    </div>
                    <div className="workspace-container">
                        <div className="container-header">
                            <div className="header-back">
                                <div className="h3-wrapper">
                                    <h3>РАСЧЕТ</h3>
                                </div>
                            </div>
                        </div>
                        <div className="profile-list">
                            <div className="sortament">СОРТАМЕНТ</div>
                            <div className="profile-list-border">
                                {this.state.active.profile.map((item, i)=>{
                                    if(item===1){
                                        return <div className="list-item" key={i} onClick={this.handleProfileClick.bind(this,item)}><img src="../../img/calc-img-measure-40/circle.png" /></div>
                                    }
                                    else if(item===2){
                                        return <div className="list-item" key={i} onClick={this.handleProfileClick.bind(this,item)}><img src="../../img/calc-img-measure-40/square.png" /></div>
                                    }
                                    else if(item===3){
                                        return <div className="list-item" key={i} onClick={this.handleProfileClick.bind(this,item)}><img src="../../img/calc-img-measure-40/plate.png" /></div>
                                    }
                                    else if(item===4){
                                        return <div className="list-item" key={i} onClick={this.handleProfileClick.bind(this,item)}><img src="../../img/calc-img-measure-40/profile-circle.png" /></div>
                                    }
                                    else if(item===5){
                                        return <div className="list-item" key={i} onClick={this.handleProfileClick.bind(this,item)}><img src="../../img/calc-img-measure-40/profile-square.png" /></div>
                                    }
                                    else if(item===6){
                                        return <div className="list-item" key={i} onClick={this.handleProfileClick.bind(this,item)}><img src="../../img/calc-img-measure-40/channel.png" /></div>
                                    }
                                    else if(item===7){
                                        return <div className="list-item" key={i} onClick={this.handleProfileClick.bind(this,item)}><img src="../../img/calc-img-measure-40/hexahedron.png" /></div>
                                    }
                                    else if(item===8){
                                        return <div className="list-item" key={i} onClick={this.handleProfileClick.bind(this,item)}><img src="../../img/calc-img-measure-40/bead.png" /></div>
                                    }
                                    else if(item===9){
                                        return <div className="list-item" key={i} onClick={this.handleProfileClick.bind(this,item)}><img src="../../img/calc-img-measure-40/corner.png" /></div>
                                    }
                                })}
                            </div>
                        </div>
                        <div className="profile-image">
                            <div className="measures">РАЗМЕРЫ</div>
                            {(() => {
                                switch (this.state.activeprofile) {
                                    case 1:  return <div className="profile-image-wrapper"><div><img src="../../img/calc-img-measure-500/circle-250.jpg" /></div></div>;
                                    case 2:  return <div className="profile-image-wrapper"><div><img src="../../img/calc-img-measure-500/square-250.jpg" /></div></div>;
                                    case 3:  return <div className="profile-image-wrapper"><div><img src="../../img/calc-img-measure-500/plate-250.jpg" /></div></div>;
                                    case 4:  return <div className="profile-image-wrapper"><div><img src="../../img/calc-img-measure-500/profile-circle-250.jpg" /></div></div>;
                                    case 5:  return <div className="profile-image-wrapper"><div><img src="../../img/calc-img-measure-500/profile-square-250.jpg" /></div></div>;
                                    case 6:  return <div className="profile-image-wrapper"><div><img src="../../img/calc-img-measure-500/channel-250.jpg" /></div></div>;
                                    case 7:  return <div className="profile-image-wrapper"><div><img src="../../img/calc-img-measure-500/hexahedron-250.jpg" /></div></div>;
                                    case 8:  return <div className="profile-image-wrapper"><div><img src="../../img/calc-img-measure-500/bead-250.jpg" /></div></div>;
                                    case 9:  return <div className="profile-image-wrapper"><div><img src="../../img/calc-img-measure-500/corner-250.jpg" /></div></div>;
                                }
                            })()}
                        </div>

                        <div className="workspace">
                            <div className="workspace-inner-block">
                                <div className="input-measures">ВВЕДИТЕ РАЗМЕРЫ</div>
                                {(() => {
                                    switch (this.state.activeprofile) {
                                        case 1:  return (<div className="measures-inputs-wrapper">
                                            <div className="input-tite">Диаметр, d(мм):</div>
                                            <div><input type='number' onBlur={this.handleOnBlurD.bind(this,this.state.dvalue)} name="d" value={this.state.dvalue} onChange={this.handleDChange.bind(this)}/></div>
                                            <div className="input-tite">Длина, мм:</div>
                                            <div><input type='number' onBlur={this.handleOnBlurN.bind(this,this.state.nvalue)} name="n" value={this.state.nvalue} onChange={this.handleNChange.bind(this)}/></div>
                                        </div>);
                                        case 2:  return (<div className="measures-inputs-wrapper">
                                            <div className="input-tite">Ширина, h(мм):</div>
                                            <div><input type='number' onBlur={this.handleOnBlurH.bind(this,this.state.hvalue)} name="h" value={this.state.hvalue} onChange={this.handleHChange.bind(this)}/></div>
                                            <div className="input-tite">Длина, мм:</div>
                                            <div><input type='number' onBlur={this.handleOnBlurN.bind(this,this.state.nvalue)} name="n" value={this.state.nvalue} onChange={this.handleNChange.bind(this)}/></div>
                                        </div>);
                                        case 3:  return (<div className="measures-inputs-wrapper">
                                            <div className="input-tite">Ширина, h(мм):</div>
                                            <div><input type='number' onBlur={this.handleOnBlurH.bind(this,this.state.hvalue)} name="h" value={this.state.hvalue} onChange={this.handleHChange.bind(this)}/></div>
                                            <div className="input-tite">Длина, l(мм):</div>
                                            <div><input type='number' onBlur={this.handleOnBlurL.bind(this,this.state.lvalue)} name="l" value={this.state.lvalue} onChange={this.handleLChange.bind(this)}/></div>
                                            <div className="input-tite">Толщина,мм:</div>
                                            <div><input type='number' onBlur={this.handleOnBlurK.bind(this,this.state.kvalue)} name="k" value={this.state.kvalue} onChange={this.handleKChange.bind(this)}/></div>
                                        </div>);
                                        case 4:  return (<div className="measures-inputs-wrapper">
                                            <div className="input-tite">Диаметр, d(мм):</div>
                                            <div><input type='number' onBlur={this.handleOnBlurD.bind(this,this.state.dvalue)} name="d" value={this.state.dvalue} onChange={this.handleDChange.bind(this)}/></div>
                                            <div className="input-tite">Толщина, k(мм):</div>
                                            <div><input type='number' onBlur={this.handleOnBlurK.bind(this,this.state.kvalue)} name="k" value={this.state.kvalue} onChange={this.handleKChange.bind(this)}/></div>
                                            <div className="input-tite">Длина, мм:</div>
                                            <div><input type='number' onBlur={this.handleOnBlurN.bind(this,this.state.nvalue)} name="n" value={this.state.nvalue} onChange={this.handleNChange.bind(this)}/></div>
                                        </div>);
                                        case 5:  return (<div className="measures-inputs-wrapper">
                                            <div className="input-tite">Размер стороны, h(мм):</div>
                                            <div><input type='number' onBlur={this.handleOnBlurH.bind(this,this.state.hvalue)} name="h" value={this.state.hvalue} onChange={this.handleHChange.bind(this)}/></div>
                                            <div className="input-tite">Размер стороны, l(мм):</div>
                                            <div><input type='number' onBlur={this.handleOnBlurL.bind(this,this.state.lvalue)} name="l" value={this.state.lvalue} onChange={this.handleLChange.bind(this)}/></div>
                                            <div className="input-tite">Толщина, k(мм):</div>
                                            <div><input type='number' onBlur={this.handleOnBlurK.bind(this,this.state.kvalue)} name="k" value={this.state.kvalue} onChange={this.handleKChange.bind(this)}/></div>
                                            <div className="input-tite">Длина, мм:</div>
                                            <div><input type='number' onBlur={this.handleOnBlurN.bind(this,this.state.nvalue)} name="n" value={this.state.nvalue} onChange={this.handleNChange.bind(this)}/></div>
                                        </div>);
                                        case 6:  return (<div  className="measures-inputs-wrapper">
                                            <div className="input-tite">Высота, h(мм):</div>
                                            <div><input type='number' onBlur={this.handleOnBlurH.bind(this,this.state.hvalue)} name="h" value={this.state.hvalue} onChange={this.handleHChange.bind(this)}/></div>
                                            <div className="input-tite">Ширина, l(мм):</div>
                                            <div><input type='number' onBlur={this.handleOnBlurL.bind(this,this.state.lvalue)} name="l" value={this.state.lvalue} onChange={this.handleLChange.bind(this)}/></div>
                                            <div className="input-tite">Толщина, k(мм):</div>
                                            <div><input type='number' onBlur={this.handleOnBlurK.bind(this,this.state.kvalue)} name="k" value={this.state.kvalue} onChange={this.handleKChange.bind(this)}/></div>
                                            <div className="input-tite">Длина, мм:</div>
                                            <div><input type='number' onBlur={this.handleOnBlurN.bind(this,this.state.nvalue)} name="n" value={this.state.nvalue} onChange={this.handleNChange.bind(this)}/></div>
                                        </div>);
                                        case 7:  return (<div className="measures-inputs-wrapper">
                                            <div className="input-tite">Размер грани, h(мм):</div>
                                            <div><input type='number' onBlur={this.handleOnBlurH.bind(this,this.state.hvalue)} name="h" value={this.state.hvalue} onChange={this.handleHChange.bind(this)}/></div>
                                            <div className="input-tite">Длина, n(мм):</div>
                                            <div><input type='number' onBlur={this.handleOnBlurN.bind(this,this.state.nvalue)} name="n" value={this.state.nvalue} onChange={this.handleNChange.bind(this)}/></div>
                                        </div>);
                                        case 8:  return (<div className="measures-inputs-wrapper">
                                            <div className="input-tite">Высота, h(мм):</div>
                                            <div><input type='number' onBlur={this.handleOnBlurH.bind(this,this.state.hvalue)} name="h" value={this.state.hvalue} onChange={this.handleHChange.bind(this)}/></div>
                                            <div className="input-tite">Ширина, l(мм):</div>
                                            <div><input type='number' onBlur={this.handleOnBlurL.bind(this,this.state.lvalue)} name="l" value={this.state.lvalue} onChange={this.handleLChange.bind(this)}/></div>
                                            <div className="input-tite">Толщина, k(мм):</div>
                                            <div><input type='number' onBlur={this.handleOnBlurK.bind(this,this.state.kvalue)} name="k" value={this.state.kvalue} onChange={this.handleKChange.bind(this)}/></div>
                                            <div className="input-tite">Толщина, s(мм):</div>
                                            <div><input type='number' onBlur={this.handleOnBlurS.bind(this,this.state.svalue)} name="s" value={this.state.svalue} onChange={this.handleSChange.bind(this)}/></div>
                                            <div className="input-tite">Длина, мм:</div>
                                            <div><input type='number' onBlur={this.handleOnBlurN.bind(this,this.state.nvalue)} name="n" value={this.state.nvalue} onChange={this.handleNChange.bind(this)}/></div>
                                        </div>);
                                        case 9:  return (<div className="measures-inputs-wrapper">
                                            <div className="input-tite">Размер стороны, h(мм):</div>
                                            <div><input type='number' onBlur={this.handleOnBlurH.bind(this,this.state.hvalue)} name="h" value={this.state.hvalue} onChange={this.handleHChange.bind(this)}/></div>
                                            <div className="input-tite">Размер стороны, l(мм):</div>
                                            <div><input type='number' onBlur={this.handleOnBlurL.bind(this,this.state.lvalue)} name="l" value={this.state.lvalue} onChange={this.handleLChange.bind(this)}/></div>
                                            <div className="input-tite">Толщина, k(мм):</div>
                                            <div><input type='number' onBlur={this.handleOnBlurK.bind(this,this.state.kvalue)} name="k" value={this.state.kvalue} onChange={this.handleKChange.bind(this)}/></div>
                                            <div className="input-tite">Длина, мм:</div>
                                            <div><input type='number' onBlur={this.handleOnBlurN.bind(this,this.state.nvalue)} name="n" value={this.state.nvalue} onChange={this.handleNChange.bind(this)}/></div>
                                        </div>);
                                    }
                                })()}
                                <div className="button-text">НАЖМИТЕ ДЛЯ РАСЧЕТА</div>
                                <div className="button-calc-wrapper">
                                    <button className="button-calc" onClick={this.handleCalculate.bind(this, this.state.activeprofile)}>РАССЧИТАТЬ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-box">
                    <div className="weight-bottom-text">ВЕС, кг</div>
                    <div className="weight-bottom-result">{this.state.result}</div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<MainContainer/>, document.getElementById('container'));
