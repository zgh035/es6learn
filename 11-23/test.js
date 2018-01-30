//黄色背景的说明
let target = document.querySelector('.bim-message');
//表格下的说明
let desc = document.querySelector('.bim-explain');
//表格的父元素
let parTar = document.querySelector('.bim-edit-table');
//卡片
let cardTart = document.querySelector('.data-fill-content');
//单位
let unit = document.querySelector('.bim-unit');
let bodyHeight = cardTart.offsetHeight - (desc ? desc.offsetHeight : 0) - 111;
//获取所有行的高度的和
let height = this.countBodyHeight(bodyHeight);
if(height >= bodyHeight - (target ? target.offsetHeight : 0)) {
    //重新设定表格的高度
    parTar.style.height = bodyHeight + 'px';
    this.$refs['hotTable'].table.updateSettings({
        height : parTar.offsetHeight - (target ? target.offsetHeight : 0) - (unit ? unit.offsetHeight : 0)
    },false);
}else{
    //重新设定表格的高度
    parTar.style.height = height + (target ? target.offsetHeight : 0) + (unit ? unit.offsetHeight : 0) + 'px';
    this.$refs['hotTable'].table.updateSettings({
        height : height
    },false);
}

countBodyHeight (parHeight) {
    let table = this.$refs['hotTable'].table;
    let rows = table.countRows();
    let tableDom = document.querySelector('.wtHolder');
    //行数大于0，获取每行的高度
    if(rows){
        //行高的和
        let height = table.getRowHeight(-1);
        for(let i = 0,j = rows;i < j;i++) {
            height += table.getRowHeight(i);
            //如果计算出前几行超出了父元素的高度就不用再计算了，直接返回高度
            if(height > parHeight){
                return parHeight;
            }
        }
        return height + ( (tableDom.scrollWidth - tableDom.offsetWidth) > 0 ? 20 : 5 );
    }else{
        //所有表格的高度
        let heights = table.getPlugin('autoRowSize').heights;
        let targetTable = document.querySelector('.wtHolder');
        //如果获取不到表头的高度，需要计算默认高度
        if(!heights[-1]){
            return table.getSettings().columnHeaderHeight + (targetTable.scrollHeight > targetTable.offsetHeight ? 16 : 6)
        }
        return heights[-1] + heights[0];
    }
},