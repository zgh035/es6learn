
import Handsontable from 'handsontable';

/**
 * 自定义的handsontable的下拉选择插件，带搜索
 */
class myAutoComplete extends Handsontable.editors.TextEditor{

    constructor (...arg) {
        super(...arg);
        this.inserChild = false;
    }

    /**
     * 创建元素的状态
     */
    createElements () {
        Handsontable.editors.TextEditor.prototype.createElements.apply(this, arguments);
        this.TEXTAREA = document.createElement('input');
        this.TEXTAREA.className = 'handsontableInput';
        this.options = document.createElement('div');
        this.textareaStyle = this.TEXTAREA.style;
        this.textareaStyle.width = 0;
        this.textareaStyle.height = 0;
        this.options.className = 'htAutoSelect';
        this.options.style.width = 'max-content';
        this.options.style.maxHeight = '200px';
        this.options.style.background = '#ffffff';
        this.options.style.overflow = 'auto';
        this.options.style.position = 'fixed';
        this.options.style.border = '1px solid #DFE3E9';
        this.options.style.boxShadow = '0 1px 10px 0 rgba(0,0,0,0.10)';
        this.TEXTAREA.oninput = this.onInput(this.TEXTAREA,this.options);
        Handsontable.dom.empty(this.TEXTAREA_PARENT);
        this.TEXTAREA_PARENT.appendChild(this.TEXTAREA);
        this.TEXTAREA_PARENT.appendChild(this.options);
    }


    /**
     * 编辑状态开启前的状态
     * @param arg
     */
    prepare (...arg) {
        super.prepare(...arg);
        let options = this.cellProperties.source;
        if(typeof options === 'function') {
            this.prepareOptions(options());
        }else{
            this.prepareOptions(options);
        }
    }

    /**
     * 编辑框打开
     * @param arg
     */
    open (...arg) {
        super.open(...arg);
        this.options.scrollTop = 0;
        let value = this.getValue();
        let eles = document.querySelectorAll('.ht-li-div');
        for(let i = 0 ,j = eles.length;i < j;i++) {
            let text = eles[i].innerText;
            if(typeof text !== null && typeof text !== undefined){
                if(String(text).toLowerCase().indexOf(value) === -1){
                    eles[i].style.display = 'none';
                }else{
                    eles[i].style.display = 'block';
                }
            }
        }
        myAutoComplete.setPosition(this.TEXTAREA,this.options);
    }

    /**
     * 重新设定下拉选框的位置
     * @param TEXTAREA 输入框
     * @param options 下拉选项
     */
    static setPosition (TEXTAREA,options) {
        let areaPosition = TEXTAREA.getBoundingClientRect();
        let optionsPositions = options.getBoundingClientRect();
        let bodyHeight = document.body.offsetHeight;
        if(areaPosition.top + areaPosition.height + optionsPositions.height > bodyHeight ) {
            // if(optionsPositions.height > areaPosition.top) {
            //     options.style.top = areaPosition.height + 'px';
            // }else{
            //     options.style.top = - optionsPositions.height + 'px';
            // }
            options.style.top = areaPosition.top - optionsPositions.height + 'px';
        }else{
            options.style.top = areaPosition.height + areaPosition.top + 'px';
            // options.style.top = areaPosition.height + 'px';
        }
    }

    /**
     * 处理参数
     * @param options
     */
    prepareOptions (options = []) {
        //判断是否已经生成节点过节点
        if(this.inserChild) return;
        for(let i = 0,j = options.length;i < j;i++) {
            let liEl = document.createElement('div');
            liEl.className = 'ht-li-div';
            liEl.style.width = '100%';
            liEl.style.height = '30px';
            liEl.style.lineHeight = '30px';
            liEl.style.cursor = 'pointer';
            liEl.style.whiteSpace = 'nowrap';
            liEl.style.overflow = 'hidden';
            liEl.style.textOverflow = 'ellipsis';
            liEl.style.padding = '0 5px';
            //点击了一个元素就表示填了一个元素，完成了编辑
            liEl.onclick = () => {
                this.setValue(options[i]);
                this.finishEditing();
            };
            liEl.innerHTML = options[i];
            //插入到父元素
            this.options.appendChild(liEl);
        }
        this.inserChild = true;
    }

    /**
     * 输入框中输入的时候做搜索
     * @param TEXTAREA 输入框
     * @param options 下拉选项
     */
    onInput (TEXTAREA,options) {
        return function (event) {
            setTimeout(() => {
                let value = String(event.target.value).replace(/^\s+|^\n+|\s+$\n+$/g,'').toLowerCase();
                let eles = document.querySelectorAll('.ht-li-div');
                for(let i = 0 ,j = eles.length;i < j;i++) {
                    let text = eles[i].innerText;
                    if(typeof text !== null && typeof text !== undefined){
                        if(String(text).toLowerCase().indexOf(value) === -1){
                            eles[i].style.display = 'none';
                        }else{
                            eles[i].style.display = 'block';
                        }
                    }
                }
                myAutoComplete.setPosition(TEXTAREA,options);
            },100);
        }
    }
}


export default myAutoComplete;
