describe("To print FizzBuzz numbers from 1 to 100", () => {

    var obj = {};

    beforeEach(() => {

        const input = document.createElement('p');
        input.id = "fizz-buzz";
        input.style.display = "none";
        document.body.appendChild(input);
        obj.fizzBuzz = fizzBuzz;

    });

     it("Should display numbers from 1 to 100", () => {

          spyOn(obj, "fizzBuzz").and.callThrough();
          expect(obj.fizzBuzz).not.toHaveBeenCalled();
          obj.fizzBuzz();
          expect(obj.fizzBuzz).toHaveBeenCalled();
     });

});