(function(){
//冒泡排序
var  array=[3,4,7,2,5,1,8,11,9];
function bubbleSort(array){
	var  length=array.length;
	for(var i=length;i>1;i--){
		for(var j=0;j<i;j++){
			if(array[j]>array[j+1]){
				array=swap(array,j,j+1);
			}
		}
	}
}
bubbleSort(array);
function swap(array,v1,v2){
	var temp=array[v1];
	array[v1]=array[v2];
	array[v2]=temp;
	return array;
}

//  选择排序
    function selectionSort(array) {
        var min;
        for (var i = 0; i<array.length-1;i++) {
            min = i;
            for (var j=i+1;j<array.length;j++) {
                if (array[j]<array[min]) {
                    min = j;
                }
                swap(array, i, min);
            }
        }
    }


selectionSort(array);


//插入排序
    function insertionSort(array) {
        var temp, j;
        for (var i = 1; i <array.length; ++i) {
            temp =array[i];
            j = i;
            while (j > 0 && (array[j - 1] >= temp)) {
                array[j] = array[j - 1];
                --j;
            }
            array[j] = temp;
        }
        console.log(array);
    }

insertionSort(array);



















})()