<?php (function(){ ob_start(); ?>
 <article class="av-article-v1 footer bk-dark column-1x center-content av-padding-1x" >
        <div class="container">
            <section >
                    <h4>Navigation</h4>
                    <ul>
                        <a href="#hero"><li>Home</li></a>
                        <a href="#skills"><li>Skills</li></a>
                        <a href="#budget"><li>Projects</li></a>
                        <a href="#contact"><li>Contact</li></a>
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
    </article>
    
 <?php echo ob_get_clean(); })(); ?>