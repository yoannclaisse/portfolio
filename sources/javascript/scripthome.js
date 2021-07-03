$imageContainer = document.querySelector('.container-image')
$imageHome = $imageContainer.querySelector('.home-image')
console.log($imageHome)
function lazyLoad ()
{
    if($imageHome.complete == true)
    {
        $imageHome.classList.add('loaded')
    }
    else
    {
        $imageHome.addEventListener('load', () =>
        {
            $imageHome.classList.add('loaded')
        })
    }
}
lazyLoad()
