$container = document.querySelector('.container')
$chapters = [...$container.querySelectorAll('.chapter')]

document.addEventListener('DOMContentLoaded', function() 
{
        $chapters.forEach(($chapter) =>
    {
        $chapter.classList.add('loaded')
    })
})