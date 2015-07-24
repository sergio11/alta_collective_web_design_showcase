(function($){

	var init = function(){

		$("#project-menu").delegate("a[data-project-type]","click",function(e){

			e.preventDefault();
			e.stopPropagation();

			var $this = $(this);

			if(!$this.parent().hasClass("active")){
				$this.parent().addClass("active").siblings().removeClass("active");
				//obtenemos el tipo de proyecto por el que filtrar.
				var projectType = this.dataset.projectType;
				$("#projects").children().removeClass("active").filter(function(i,project){
					return project.dataset.types.search(projectType) >= 0;
				}).addClass("active");
			}

		});
	}


	$(document).ready(init);

})(jQuery);