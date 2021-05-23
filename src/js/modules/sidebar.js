import $ from 'jquery'
class Sidebar {
    constructor(){
        this.sidebar();
    }
    sidebar(){
        $(document).ready(function(){
              $("#sub-menu-user").hide()
              $("#main-menu-user").on('click',function(){
                $("#sub-menu-user").toggle()
                $(this).toggleClass('active')
              })
              $("#sub-menu-group").hide()
              $("#main-menu-group").on('click',function(){
                $("#sub-menu-group").toggle()
                $(this).toggleClass('active')
              })
              $("#sub-menu-product").hide()
              $("#main-menu-product").on('click',function(){
                $("#sub-menu-product").toggle()
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
            $("#header").load("template/header.html")
            $("#account").load("template/account.html")
            $("#dashboard").load("template/dashboard.html")
            $("#add-user" ).load("template/add-user.html" );
        });
    }
}
export default Sidebar