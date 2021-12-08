/* eslint-disable no-useless-constructor */

import React, { createRef, PureComponent } from 'react'

export default class a extends PureComponent{
        ref1=new createRef(null);
        constructor(props){
              super(props);
              this.state={
                  name:'fate'
              }
        }
        ref2=new createRef(null);
        say=(data)=>{
            console.log('parent');
            console.dir(this);
            console.log(this.state);
            this.setState({name:data},()=>{
                console.log(this.state);
            });

        }
        an=()=>{
            this.ref1.current.gg();
        }

        yy=(el)=>{
            console.log('fate saber night!');
           this.ref2=el;
           this.ref2.gg();
           console.log(this.ref2);
           this.ref2.setState({ds:'hahah'},()=>{
               console.log(this.ref2.state);
           })
        }
        render(){
            return (
                <>
                     <Child whole={this} ref={this.ref1} fun={this.say}/>
                     <button onClick={this.an}>子组件</button>
                </>
            );
        }



}


class Child extends PureComponent{
     constructor(props){
         super(props);
         this.state={say:this.props.fun};
     }
     haha=()=>{
         console.log(this.fun);
         this.props.fun.apply(this,['lance   saber!']);
         console.log(this.fun);
         console.dir(this.props.whole);
         this.props.whole.yy(this);
     }
     gg=()=>{
         console.log('hhh！');
     }
     render(){
         return (
             <>
                 <button onClick={this.haha}>hhh</button>
             </>
         );
     }
}

