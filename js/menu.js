document.addEventListener('DOMContentLoaded', function() {

    homeElem = document.getElementById('home');
    fed_projElem = document.getElementById('fed_proj');
    bed_projElem = document.getElementById('bed_proj');
    aboutMeElem = document.getElementById('aboutMe');
    serviceElem = document.getElementById('service');

    homeElem_content = document.getElementById('home_content');
    fed_proj_contentElem = document.getElementById('fed_proj_content');
    bed_proj_contentElem = document.getElementById('bed_proj_content');
    aboutMe_contentElem = document.getElementById('aboutMe_content');
    service_contentElem = document.getElementById('service_content');

    homeElem.addEventListener('click', function() {
        /* home link */

        if (fed_projElem.classList.contains('active') || bed_projElem.classList.contains('active') || aboutMeElem.classList.contains('active') || serviceElem.classList.contains('active')) {
            fed_projElem.classList.remove('active');
            bed_projElem.classList.remove('active');
            aboutMeElem.classList.remove('active');
            serviceElem.classList.remove('active');
            homeElem.classList.add('active');
        } else {
            homeElem.classList.add('active');
        }

        /* home content */
        homeElem_content.classList.remove('none');
        fed_proj_contentElem.classList.add('none');  
        bed_proj_contentElem.classList.add('none');  
        aboutMe_contentElem.classList.add('none');  
        service_contentElem.classList.add('none');  
    });

    fed_projElem.addEventListener('click', function() {
        /* Fed Link */

        if (homeElem.classList.contains('active') || bed_projElem.classList.contains('active') || aboutMeElem.classList.contains('active') || serviceElem.classList.contains('active')) {
            homeElem.classList.remove('active');
            bed_projElem.classList.remove('active');
            aboutMeElem.classList.remove('active');
            serviceElem.classList.remove('active');
            fed_projElem.classList.add('active');
        } else {
            fed_projElem.classList.add('active');
        }

        /* fed content */
        fed_proj_contentElem.classList.remove('none');  
        homeElem_content.classList.add('none');  
        bed_proj_contentElem.classList.add('none');  
        aboutMe_contentElem.classList.add('none');  
        service_contentElem.classList.add('none');  
    });

    bed_projElem.addEventListener('click', function() {
        /* État actif de l'onglet */

        if (homeElem.classList.contains('active') || fed_projElem.classList.contains('active') || aboutMeElem.classList.contains('active') || serviceElem.classList.contains('active')) {
            homeElem.classList.remove('active');
            fed_projElem.classList.remove('active');
            aboutMeElem.classList.remove('active');
            serviceElem.classList.remove('active');
            bed_projElem.classList.add('active');
        } else {
            bed_projElem.classList.add('active');
        }

        /* Affichage en fonction de l'id cliqué */
        homeElem_content.classList.add('none');
        fed_proj_contentElem.classList.add('none');    
        aboutMe_contentElem.classList.add('none');  
        service_contentElem.classList.add('none');
        bed_proj_contentElem.classList.remove('none');  
    });

    aboutMeElem.addEventListener('click', function() {
        /* État actif de l'onglet */

        if (homeElem.classList.contains('active') || fed_projElem.classList.contains('active') || bed_projElem.classList.contains('active') || serviceElem.classList.contains('active')) {
            homeElem.classList.remove('active');
            fed_projElem.classList.remove('active');
            bed_projElem.classList.remove('active');
            serviceElem.classList.remove('active');
            aboutMeElem.classList.add('active');
        } else {
            aboutMeElem.classList.add('active');
        }

        /* Affichage en fonction de l'id cliqué */
        homeElem_content.classList.add('none');
        fed_proj_contentElem.classList.add('none');  
        bed_proj_contentElem.classList.add('none');    
        service_contentElem.classList.add('none');
        aboutMe_contentElem.classList.remove('none'); 
    });

    serviceElem.addEventListener('click', function() {
        /* État actif de l'onglet */

        if (homeElem.classList.contains('active') || fed_projElem.classList.contains('active') || bed_projElem.classList.contains('active') || aboutMeElem.classList.contains('active')) {
            homeElem.classList.remove('active');
            fed_projElem.classList.remove('active');
            bed_projElem.classList.remove('active');
            aboutMeElem.classList.remove('active');
            serviceElem.classList.add('active');
        } else {
            serviceElem.classList.add('active');
        }

        /* Affichage en fonction de l'id cliqué */
        homeElem_content.classList.add('none');
        fed_proj_contentElem.classList.add('none');  
        bed_proj_contentElem.classList.add('none');  
        aboutMe_contentElem.classList.add('none');  
        service_contentElem.classList.remove('none'); 
    });

});