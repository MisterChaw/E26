
class Stack {
    constructor() {
        this.items = []
        this.count = 0
         
    }

    // Add element to top of stack
    push(element) {
        this.items[this.count] = element
        let push_res=`${element}`; //console.log(`added to ${this.count}`);
        this.count += 1;
        let count=this.count -1;
        //return [push_res,count];
        return [push_res, count];
    }

    // Return and remove top element in stack
    // Return undefined if stack is empty
    pop() {
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count - 1]
        this.count -= 1

        return deleteItem
    }

    // Check top element in stack
    peek() {

        return this.items[this.count - 1]
    }

    // Check if stack is empty
    isEmpty() {

        return this.count == 0
    }

    // Check size of stack
    size() {

        return this.count
    }

    // Print elements in stack
    print() {
        let str = ''
        for(let i = 0; i < this.count; i++) {
            str += this.items[i] + ' '
        }
        return str
    }

    // Clear stack
    clear() {
        this.items = []
        this.count = 0
        console.log('Stack cleared..')
        return this.items
    }
}

const stack = new Stack()

$(document).ready(function(){
    // push
    $("#pushBtn").on("click", function() {
        let pushData = stack.push($("#data").val());
        $("#stack").prepend(`<div id="st${pushData[0]}" class = "row bg-primary push">${pushData[0]}</div>`);
    });

    // pop
    $("#popBtn").on("click", function() {
        let popdata = stack.pop();
        $("#poppedItems").prepend(`<div class="row pop text-bg-danger border border-light">${popdata}</div>`);
        $(`#st${popdata}`).remove();
    });

    // peek
    $("#peekBtn").on("click", function() {
        let peekData = stack.peek();
        $(`#st${peekData}`).removeClass("bg-primary").addClass("peek");
        setTimeout(function(){
            $(`#st${peekData}`).removeClass("peek").addClass("bg-primary");
        }, 1000);
    });

    // clear
    $("#clearBtn").on("click", function() {
        stack.clear();
        $("#stack, #poppedItems").empty();
    });
    
});