describe("click button", function(){
    it("moves container", function(){
        startApp();    
        var name = document.getElementById('container__name').innerHTML.trim();
        var user = document.getElementById('container__user').innerHTML.trim();
        document.getElementById('btn1').click();
        expect(user.innerHTML).toEqual(name.innerHTML);
       
    });
    it("moves to container", function(){
        startApp();
        var name = document.getElementById('container__name').innerHTML.trim();
        var user = document.getElementById('container__user').innerHTML.trim();
        document.getElementById('btn2').click();
        expect(name.innerHTML).toEqual(user.innerHTML);        
    });
});