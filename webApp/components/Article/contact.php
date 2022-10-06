<?php (function(){ ob_start(); ?>
 <article id="contact" class="av-article-v1 contact bk-dark column-2x column-top av-padding-2x">
        <div class="container">
            <section >
                    <h2>Get in touch</h2>
                    
                    <p>
                    I'd love to hear from you. I'm available to chat.
                    </p>
                     <ul>
                        <li>
                            <i class="fa-regular fa-envelope"></i>Let's chat <span>gh@gmail.com</span>
                        </li>

                        <li>
                            <i class="fa-solid fa-phone"></i>
                            Phone <span>7894489948</span>
                        </li>
        
                     </ul>                   
            </section>
            <figure style="justify-self: flex-end ;">
            <form id="contactForm" action="">
            <h2>Message me</h2>
            <p>You can reach me anytime via gh@gmail.com</p>
                        <fieldset>
                            <label>Full Name</label>
                            <input name="name" type="text"/>
                        </fieldset>
                        <fieldset>
                            <label>Email</label>
                            <input name="email" type="email"/>
                        </fieldset>
                        <fieldset>
                            <label>Phone</label>
                            <input name="phone" type="text"/>
                        </fieldset>
                        <fieldset>
                            <label>Message</label>
                            <textarea></textarea>
                        </fieldset>
                
                        <button class="tertiary-btn">Submit</button>
                    </form>
            </figure>
        </div>
    </article>
    
 <?php echo ob_get_clean(); })(); ?>