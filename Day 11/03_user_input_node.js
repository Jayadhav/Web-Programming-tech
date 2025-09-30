function tableno(){
    console.log('all arguments', process.argv);
    let a = process.argv[2];
    for(let i=1;i<=10;i++)
    {
        console.log(i*a);
    }

}
tableno()