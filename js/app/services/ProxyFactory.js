class ProxyFactory {
    static create(objeto, props, acao){
        return new Proxy (objeto, {
            get(target, prop, receiver){
               if(props.includes(prop) && ProxyFactory.isFun(target[prop])){
                    return function(){
                        Reflect.apply(target[prop], target, arguments);
                        return acao(target);
                    }
               }
               return Reflect.get(target, prop, receiver);
            }, 
            set(target, prop, value, receiver){
                if(props.includes(prop)){
                    target[prop] =value;
                    acao(target)
                }
                return Reflect.set(target, prop, value, receiver);
               
            }
        }); 
    }

    static isFun(fun){
        return typeof(fun)== typeof(Function);
    }
}
