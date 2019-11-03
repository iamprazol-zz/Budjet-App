// BUDGET CONTROLLER
let budgetController = ( function () {
   let x = 23;
   let add = function (a) {
       return x + a;
   };

   return {
       publicTest: function (b) {
           console.log(add(b));
       }
   }
})();


// UI CONTROLLER
let UIController = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription : '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    };

    return {
      getInput: function () {

          return {
              type : document.querySelector(DOMstrings.inputType).value,
              description : document.querySelector(DOMstrings.inputDescription).value,
              value : document.querySelector(DOMstrings.inputValue).value
          };
      },

      getDOMstrings : function () {

        return DOMstrings;

      }
    };

})();


// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListeners = function () {

        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputButton).addEventListener('click', ctrAddItem);

        document.addEventListener('keypress', function (event) {

            if(event.which === 13){
                ctrAddItem();
            }
        });

    };

    var ctrAddItem = function(){
        // 1. Get the filed input data
        var input = UICtrl.getInput();
        console.log(input);

        // 2. Add the item to budget controller
        // 3. Add the item to the UI
        // 4. Calculate the budget
        // 5. Display the budget on the UI
    };

    return {
        init: function () {
            console.log('Application has started.');
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();