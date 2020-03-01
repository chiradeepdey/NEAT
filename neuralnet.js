class NeuralNetwork
{
  constructor(a,b,c)
  { if (a instanceof NeuralNetwork)
    { this.input_nodes=a.input_nodes;
      this.hidden_nodes=a.hidden_nodes;
      this.output_nodes=a.output_nodes;

      this.weights_IH=a.weights_IH.copy();
      this.weights_HO=a.weights_HO.copy();
      this.bias_IH=a.bias_IH.copy();
      this.bias_HO=a.bias_HO.copy();

  }
  else{
    this.input_nodes=a;
    this.hidden_nodes=b;
    this.output_nodes=c;

    this.weights_IH=new Matrix(this.hidden_nodes,this.input_nodes);
    this.weights_HO=new Matrix(this.output_nodes,this.hidden_nodes);

    this.weights_IH.randomize();
    this.weights_HO.randomize();

    this.bias_IH=new Matrix(this.hidden_nodes,1);
    this.bias_HO=new Matrix(this.output_nodes,1);

    this.bias_IH.randomize();
    this.bias_HO.randomize();
  }
}
  feedforward(input_array)
  {
    function sigmoid(x)
    {
      return 1/(1+Math.exp(-x));
    }
    var input=Matrix.fromArray(input_array);
    var hidden=Matrix.multiply(this.weights_IH,input);
    hidden.add(this.bias_IH);
    hidden.map(sigmoid);


    var output=Matrix.multiply(this.weights_HO,hidden);
    output.add(this.bias_HO);
    output.map(sigmoid);


    return output.toArray();
  }
  train(inputs,target)
  {
    var output=this.feedforward(inputs);

    //output_error is a matrix object not an array
    var output_error=Matrix.subtract(target.fromArray(),output.fromArray());


    var weights_HO_transpose=Matrix.transpose(this.weights_HO);


    var hidden_errors=Matrix.multiply(weights_HO_transpose,err,output_error);
  }


copy(){
  return new NeuralNetwork(this);
}

mutate(func){

   this.weights_IH.map(func);
   this.weights_HO.map(func);
   this.bias_IH.map(func);
   this.bias_HO.map(func);


}
}
