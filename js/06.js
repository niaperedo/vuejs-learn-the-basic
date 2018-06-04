Vue.filter('uppercase', function(value) {
    return value.toUpperCase();    
});

new Vue({
    el: "#app",
    data: {
        title: 'hello world',
        message: 'SOMETHING'
    },
    filters: {
       lowercase(value) {
            return value.toLowerCase();
       }     
    }  
});