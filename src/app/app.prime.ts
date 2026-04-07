export class Prime{
    static isPrime(num :number) :boolean{
        if(num <=1) return false;
        for(let k=2;k<num/2;k++){
            if(num%k == 0){
                return false
            }
        }
        return true
    }

   
    static findNthPrimeNumer(num:number):number{
       let k =2;
       let count =0;
       if(num<2){
        return num;
       }
       while(count<num){
        if(this.isPrime(k)){
            count++
        }
        k++
       }
       console.log(k-1)
       return k-1
    }
}