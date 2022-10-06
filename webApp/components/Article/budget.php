<?php (function(){ ob_start(); ?>
 <article id="budget" class="av-article-v1 budget columns-reverse av-padding-3x bk-dark">
        <div class="container">
            <section style="justify-self: flex-end;">
                    <h2>Green Budget</h2>
                    
                    <p>We are a nonprofit organization dedicated to provide not only an educational pathways for the youth in Haiti</p>
                    <h3 class="h3-design">Technologies</h3>
                    <div class="project-content">
                        <ul>
                            <span>Client:</span>
                            <li>React</li>
                            <li>css</li>
                            <li>html</li>
                        </ul>
                        <ul>
                           <span>Back End:</span>
                            <li>Java</li>
                            <li>SQL</li>
                        </ul>
                        <ul>
                        <ul>
                            <span>Server:</span>
                            <li>Nginx</li>
                            <li>Tomcat</li>
                        </ul>
                    </div>
                    <div class="btn-container">
                        <button class="tertiary-btn">
                        VISIT SITE
                    </button>
                    <button class="main-btn">
                        GIT HUB
                    </button>
                    </div>
                    
            </section>
            <figure>
                <img src="media/images/dashboard.jpg" alt="">
            </figure>
        </div>
    </article>
    
 <?php echo ob_get_clean(); })(); ?>