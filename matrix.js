class Matrix
{
  constructor(rows,cols)
  {
    this.rows=rows;
    this.cols=cols;
    this.matrix=[];
    for(var i=0;i<this.rows;i++)
    this.matrix[i]=[];
    for(var i=0;i<this.rows;i++)
    for(var j=0;j<this.cols;j++)
    this.matrix[i][j]=0;
  }
  copy(){
    var m=new Matrix(this.rows,this.cols);
    for (var i=0;i<this.rows;i++){
      for (var j=0;j<this.cols;j++){
        m.matrix[i][j]=this.matrix[i][j];
      }
    }
    return m;
  }
  randomize()
  {
    for(var i=0;i<this.rows;i++)
    for(var j=0;j<this.cols;j++)
    this.matrix[i][j]=Math.random()*2-1;
  }
  static fromArray(input_array)
  {
    var m=new Matrix(input_array.length,1);
    for(var i=0;i<m.rows;i++)
    m.matrix[i][0]=input_array[i];
    return m;
  }
  static subtract(a,b)
  {
    var c=new Matrix(a.rows,a.cols);
    for(var i=0;i<c.rows;i++)
    for(var j=0;j<c.cols;j++)
    c.matrix[i][j]=a.matrix[i][j]-b.matrix[i][j];
    return c;
  }
  toArray()
  {
    var array=[];
    for(var i=0;i<this.rows;i++)
    for(var j=0;j<this.cols;j++)
    array.push(this.matrix[i][j]);

    return array;
  }
  add(b)
  {
    for(var i=0;i<this.rows;i++)
    for(var j=0;j<this.cols;j++)
    this.matrix[i][j]+=b.matrix[i][j];
  }
  static transpose(m)
  {
    var result=new Matrix(m.cols,m.rows);
    for(var i=0;i<m.cols;i++)
    for(var j=0;j<m.rows;j++)
    result.matrix[i][j]=m.matrix[j][i];
    return result;
  }
  multiply(b)
  {
      for(var i=0;i<this.rows;i++)
      for(var j=0;j<this.cols;j++)
      this.matrix[i][j]*=b;
  }
  static multiply(a,b)
  {
    var result=new Matrix(a.rows,b.cols);
    for(var i=0;i<result.rows;i++)
    for(var j=0;j<result.cols;j++)
    for(var k=0;k<a.cols;k++)
    result.matrix[i][j]+=a.matrix[i][k]*b.matrix[k][j];
    return result;
  }
  //This is a lambda function which receives a function as an argument
  map(func)
  {
    function sigmoid(x)
    {
      return 1/(1+Math.exp(-x));
    }
    for(var i=0;i<this.rows;i++)
    for(var j=0;j<this.cols;j++)
    this.matrix[i][j]=func(this.matrix[i][j]);
  }
  print()
  {
    console.table(this.matrix);
  }
}
