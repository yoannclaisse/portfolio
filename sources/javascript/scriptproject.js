$container = document.querySelector('.container')
$chapters = [...$container.querySelectorAll('.chapter')]
$burgerMenu = $container.querySelector('.burger-menu')
$iconBurgerMenu = $burgerMenu.querySelector('.icon')
$containBurgerMenu = $container.querySelector('.burger-container')
$linksProject = [...$container.querySelectorAll('.link-project')]
$projectPage = $container.querySelector('.container-projects')

// kind of lazyload
document.addEventListener('DOMContentLoaded', function() 
{
        $chapters.forEach(($chapter) =>
    {
        $chapter.classList.add('loaded')
    })
})

// burger menu icon
$burgerMenu.addEventListener('mouseenter', (event) =>
{
    $iconBurgerMenu.style.transform ='rotate(90deg)'
    $iconBurgerMenu.style.transitionProperty ='transform'
    $iconBurgerMenu.style.transitionDuration ='1s'

})

$burgerMenu.addEventListener('mouseleave', (event) =>
{
    $iconBurgerMenu.style.transform ='rotate(0deg)'
    $iconBurgerMenu.style.transitionProperty ='transform'
    $iconBurgerMenu.style.transitionDuration ='1s'
    // $containBurgerMenu.style.display ='none'
})

// Burger menu containt
$burgerMenu.addEventListener('mousedown', (event) =>
{
    $containBurgerMenu.style.transform ='translateX(0px)'
    $containBurgerMenu.style.transitionProperty ='transform'
    $containBurgerMenu.style.transitionTimingFunction ='ease-in-out'
    $containBurgerMenu.style.transitionDuration ='0.3s'
})

$containBurgerMenu.addEventListener('mouseleave', (event) =>
{
    $containBurgerMenu.style.transform ='translateX(200px)'
})

// page project


    $linksProject.forEach(($linkProject) =>
{
    $linkProject.addEventListener('mousedown', (event) =>
    {
        
    })
})
    
