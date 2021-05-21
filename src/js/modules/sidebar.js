import $ from 'jquery';
class Sidebar {
    constructor(){
        this.sidebar();
    }
    sidebar(){
        $(document).ready(function(){
              $("#sub-menu").hide()
              $("#main-menu").on('click',function(){
                $("#sub-menu").toggle()
                $(this).toggleClass('active')
              })

            // Sidebar tap
            var previousActiveTabIndex = 0;
            $(".tab-switcher").on('click keypress', function (event) {
                // event.which === 13 means the "Enter" key is pressed
                if ((event.type === "keypress" && event.which === 13) || event.type === "click") {
                    var tabClicked = $(this).data("tab-index");
                    
                    if(tabClicked != previousActiveTabIndex) {
                        $("#allTabsContainer .tab-container").each(function () {
                            if($(this).data("tab-index") == tabClicked) {
                                $(".tab-container").hide();
                                $(this).show();
                                previousActiveTabIndex = $(this).data("tab-index");
                                return;
                            }
                        });
                    }
                }
            });
            $(".tab-switcher").on('click', function () {
                $(".tab-switcher").removeClass("active");
                $(this).addClass("active");   
            });
            // add content to each tap
            $("#dashboard").load("template/dashboard.html")
            $("#add-user" ).load("template/add-user.html" );
        });
    }
}
export default Sidebar