<?php (function() { ob_start() ;?>
        <header class="av-header-v1 bk-transparent" >
            <div class="container" >
                <figure>
                    <a href="/">
                        <p>APPVENIR</p> 
                    </a>
                </figure>
                <nav>
                   <ul>
                        <a><li class="av-active">Home</li></a>
                        <a><li>Skills</li></a>
                        <a><li>Projects</li></a>
                   </ul>
                </nav>
                <section>
                     <ul>
                        <a><li><i class="fa-regular fa-envelope"></i></li></a>
                        <a><li><i class="fa-solid fa-phone"></i></li></a>
                     </ul>
                </section>
                <menu>
                    <div></div>
                    <div></div>
                    <div></div>
                </menu>
             </div>
        </header> 

<?php echo ob_get_clean(); })(); ?> 