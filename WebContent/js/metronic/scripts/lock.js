var Lock = function () {

    return {
        //main function to initiate the module
        init: function () {
             $.backstretch([
				"js/metronic/img/bg/bj.jpg",
				"js/metronic/img/bg/3.jpg",
				"js/metronic/img/bg/bj3.jpg",
		        "js/metronic/img/bg/4.jpg"
		        ], {
		          fade: 1000,
		          duration: 8000
		      });
        }

    };

}();