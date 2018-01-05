
function Person(name) {
    //如果使用new 那么这里的new.target表示person这个函数
    if (new.target !== undefined) {
      this.name = name;
    } else {
      throw new Error('必须使用 new 命令生成实例');
    }
  }