export class HeapSort{

private swap(array: number[] ,i: number , max:number): void {
		if (array[i] === undefined || array[max] === undefined ){ // testa se os valores existem 
			throw new Error(`
					i => ${i} - ${array[i]}
					max => ${max} - ${array[max]}
				`);
		}
		console.log(`array pre-swap => ${array}`);
		//[array[i], array[max] = array[max], array[i] ]; // troca de posição
        const temp = array[i];
        array[i] = array[max];
        array[max]=  temp;
		console.log(`array pos-swap => ${array}`);
 	}

 	private  heapify(array: number[], i:number,length:number):void {
 		let largest: number = i;

 		const leafL: number = 2 * i + 1;
 		const leafR: number = 2 * i + 2;


 		if (leafL < length && array[leafL] > array[largest]) /* se o nó da esquerda for maior */
 			largest = leafL; //novo indicie de maior valor
 		
 		if (leafR < length && array[leafR] > array[largest]) /* se o nó da direita for maior */
 			largest = leafR;//novo indicie de maior valor
 		
 		if (largest !== i ){ // caso o maior indice tenha sido modificado 
 			this.swap(array, i, largest); // swapa os valores
 			this.heapify(array, largest,length); // heapify (é o nome da função)
 		}

 		console.log(`array_heapificada(?) => ${array}`);

 	} 


 	public sort(array: number[]): number[] {

 		for (let i: number = Math.floor(array.length/2) -1; i>=0; i--){
            this.heapify(array, i, array.length);
 		}

 		let j = array.length - 1;
 		while(j >= 1){
            this.swap(array,0,j);
            this.heapify(array,0,j);
 			j--;
 		}
		return array;
 	}

}
