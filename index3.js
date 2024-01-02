
 class employee 
 {
    constructor(name,id)
    {
        this.name=name;
        this.id=id;
    }
    detail(des,salary)
    {
        this.des=des;
        this.salary=salary;
        console.log('Des : '+des);
        console.log('Salary :'+salary);
    }

 }

   let details=new employee('pratheepa','cl5004208');
   console.log('Name : '+details.name);
   console.log('Id : '+details.id);
   console.log(details.detail('Full Stock Developer',20000));