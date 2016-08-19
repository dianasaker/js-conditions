var x=2,y=10;
if(x>y){
	console.log(x);
}
else{
	console.log(y);
}
var a=3,b=-7;
console.log(a+b+x);
var big,arr=[0,-1,4];
for(var i=0;i<3;i++){
	if(arr[i]>arr[i+1]){
		big=arr[i];
		arr[i]=arr[i+1];
		arr[i+1]=big;
	}
}
console.log(arr);
var arr1=[-5,-2,-6,0,-1 ],max=0;
for(var i=0;i>5;i++){
	if(max<arr1[i]){
		max=arr1[i];
	}
}
console.log(max);
var arr2=[80,77,88,95,68],sum=0,avr;
for(i=0;i<5;i++){
	sum=sum+arr2[i];
}
avr=sum/5;
if(avr<60){
	console.log("very bad");
}
else if(avr<70){
	console.log("bad");
}
else if(avr<80){
	console.log("average");
}
else if(avr<90){
	console.log("good");
}
else if(avr<100){
	console.log("very good");
}
