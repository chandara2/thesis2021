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
          });
    }
}
export default Sidebar