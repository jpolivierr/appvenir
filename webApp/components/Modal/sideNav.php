<?php (function(){ ob_start(); ?>
 <article class="column-1x side-navigation bk-dark av-padding-around-1x" >
      <span class="close-btn">+</span>
      <div class="container">
      <section style="margin-bottom: 2rem;" >
                    <h4>Navigation</h4>
                    <ul>
                        <a href="#hero"><li class="navLink">Home</li></a>
                        <a href="#skills"><li class="navLink">Skills</li></a>
                        <a href="#budget"><li class="navLink">Projects</li></a>
                     </ul>
            </section>
            <section >
            <h4>Contact</h4>
                    <ul>
                        <a><li>789-489-4984</li></a>
                        <a><li>test@gmail.com</li></a>
                     </ul>
            </section>
        </div>
        </div>
    </article>
    
 <?php echo ob_get_clean(); })(); ?>