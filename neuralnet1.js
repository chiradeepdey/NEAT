class NeuralNetwork
{
  constructor(input_nodes,hidden_nodes,output_nodes)
  {
    this.input_nodes=input_nodes;
    this.hidden_nodes=hidden_nodes;
    this.output_nodes=output_nodes;

    this.weights_IH=new Matrix(this.hidden_nodes,this.input_nodes);
    this.weights_HO=new Matrix(this.output_nodes,this.hidden_nodes);

    this.weights_IH=[[0.9621959208705175, -0.25142417436935194, -0.5369697513646075, -0.30770486962563615],[0.15397523383204748, -0.5157861795067937, 0.43011405436276196, -0.6808017174027188], [0.22439861617682144, 0.3024878677309095, -0.5387091627144822, 0.9138672443310134],[0.49467132730539287, 0.07520169209206085, 0.7920391145772303, -0.8379734824529446], [-0.7392204247971663, 0.5164914054331624, -0.9837913797884426, -0.3832539180345238],[0.2636432474164305, 0.16019928065216105,0.9597572832396684, 0.8547915250010685], [0.43118634867110783, -0.3373637064006041, -0.18275843981439754, 0.4178599204985023],[0.5627737249584319, -0.1242649430178111, 0.6050301691323452, 0.5951820474838962]];

     this.weights_HO=[-0.5903355579914806, -0.8740065317761117, 0.646716585880859, -0.7924037347913102, 0.31760057895142335, 0.4417312245327354, 0.9594387811500726, -0.7442475827698147];

    this.bias_IH=new Matrix(this.hidden_nodes,1);
    this.bias_HO=new Matrix(this.output_nodes,1);

    this.bias_IH=[[0.20780211772834356],[-0.11985807628257028],[-0.8611393012419359],[-0.49184676967967444],[0.13569897560126165],[0.35302054647060555],[-0.7833702193609735],[-0.9377690093744406]];
    this.bias_HO=[0.9990157816286112];
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
}
