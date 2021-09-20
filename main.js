function createAphorismSlider(){
    let aphorism = [
        {
            image: 'images/icon.png',
            text: 'გველსა ხვრელით ამოიყვანს ენა ტკბილად მოუბარი',
            author: "შოთა რუსთაველი"
        },
        {
            image: 'images/icon.png',
            text: "სჯობს სიცოცხლესა ნაძრახსა, სიკვდილი სახელოვანი",
            author: "შოთა რუსთაველი"
        },
        {
            image: 'images/icon.png',
            text: 'ვჰგმობ კაცსა აუგიანსა, ცრუსა და ღალატიანსა',
            author: "შოთა რუსთაველი" 
        },
        {
            image: 'images/icon.png',
            text: "ვინ მოყვარესა არ ეძებს, იგი თავისა მტერია",
            author: "შოთა რუსთაველი" 
        },
        {
            image: 'images/icon.png',
            text: "ამოა, რომე კაცი კაცს ამოსა ეუბნებოდეს!",
            author: "შოთა რუსთაველი" 
        },
        {
            image: 'images/icon.png',
            text: "გული კრულია კაცისა, ხარბი და გაუძღომელი.",
            author: "შოთა რუსთაველი" 
        },
        {
            image: 'images/icon.png',
            text: "ბოროტსა სძლია კეთილმან, არსება მისი გრძელია.",
            author: "შოთა რუსთაველი" 
        },
        {
            image: 'images/icon.png',
            text: "არ დავიწყება მოყვრისა აროდეს გვიზამს ზიანსა.",
            author: "შოთა რუსთაველი" 
        },
        {
            image: 'images/icon.png',
            text: "სიცრუე და ორპირობა ავნებს ხორცსა მერმე სულსა",
            author: "შოთა რუსთაველი" 
        },
        {
            image: 'images/icon.png',
            text: "დღეს არა, ხვალე მოვკვდები, სოფელი ასრე მქმნელია.",
            author: "შოთა რუსთაველი" 
        },
        {
            image: 'images/icon.png',
            text: "რაცა ღმერთსა არა სწადდეს, არა საქმე არ იქმნების.",
            author: "შოთა რუსთაველი" 
        },
        {
            image: 'images/icon.png',
            text: "მართლად იტყვის მოციქული: შიში შეიქმს სიყვარულსა.",
            author: "შოთა რუსთაველი" 
        },
        {
            image: 'images/icon.png',
            text: "ზოგჯერ თქმა სჯობს არა-თქმასა, ზოგჯერ თქმითაც დაშავდების.",
            author: "შოთა რუსთაველი" 
        },
    ]
    let currentAphorism = 0;
    next();
    function next(){
        let nextAphorismIndex = currentAphorism + 1;
        if(nextAphorismIndex > aphorism.length - 1){
            nextAphorismIndex = 0;
        }
        setActiveAphorism(nextAphorismIndex);
    }

    function setActiveAphorism(index){
        let aphorismBox = document.querySelector('.aphorism');
        aphorismBox.style.transition = "all 0.5s";
        aphorismBox.classList.add('out');
        setTimeout(function(){
            currentAphorism = index;
            let quote = document.querySelector('.aphorism img');
            quote.src = aphorism[currentAphorism].image;

            let text = document.querySelector('.aphorism p');
            text.innerText = aphorism[currentAphorism].text;
            
            let author = document.querySelector('.aphorism h5');
            author.innerText = aphorism[currentAphorism].author;

            aphorismBox.classList.remove('out');
        }, 500);
    }

    let button = document.querySelector('button');
    button.addEventListener('click', next);
}
createAphorismSlider();