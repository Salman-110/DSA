function quicksort(items, left, right){
    let index;
    let right1=right-1
    if (items.length > 0){
        index = partition(items, left, right)
    }
    //more  elements on left side
    if (left < index -1){
       return  quicksort(items, left, index -1)
    }

    // right side elements
    if (index < right1){
       return quicksort(items, index, right);
    }
    return items
}

function partition(items, left, right){
    let right1=right-1
    let pivot = items[Math.floor((right1 + left) / 2)]
    console.log('pivot====', pivot)
    i = left,
    console.log('left====', pivot)
    j = right1,
    console.log('right====', pivot)

    while(i<=j){
        //increment left pointer
        console.log('items====', items[i], pivot)
        while (items[i] < pivot){
            console.log('coming here in first inner loop')
            i++;
        }

        // decrement right pointer
        while(items[j] > pivot){
            console.log('coming here in second inner loop')
            j--;
        }

        // swaping
        if (i<=j){
            [items[i], items[j]] = [items[j], items[i]]
            
            i++;
            j--;
        }
    }
    return i;//left pointer
}