import AppDispatcher from '../AppDispatcher';



const counterValues={
    'First':0,
    'Second':10,
    'Third':30
};
const counterStore=Object.assign({},EventEmitter.prototype,{
    getCounterValues:function(){    
        return counterValues;
    },
    emitChange:function(){  //更新广播
        this.emit(CHANGE_EVENT);
    },
    addChangeListener:function(){   //添加监听函数
        this.on(CHANGE_EVENT,callback);
    },
    removeChangeListener:function(){    //删除监听函数
        this.rermoveListener(CHANGE_EVENT,callback);
    }
});
CounterStroe.dispatchToken=AppDispatcher.register((action)=>{
    if(action.type==ActionTypes.INCREMENT){
        counterValues[action.counterCaption]++;
        CounterStore.emitChange();
    }else if (action.type===ActionTypes.DECREMENT){
        counterValues[action.counterCaption]--;
        CounterStroe.emitChange();
    }
});

