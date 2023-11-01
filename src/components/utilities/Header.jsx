import React, { useState,useEffect } from 'react'

const Header = () => {
  
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isActive, setIsActive] = useState(false)

  let navItems = [ "Home","Feature","Pricing","About Us" ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsActive(!isActive)
  }

  return (
    <header>

      <nav>
        <div className="container mx-auto px-5">
          <div className='flex items-center justify-end lg:justify-between py-3 lg:py-5'>

            <a className='mr-auto lg:m-0' href="#" rel='nofollow'>
              <svg className='max-w-[100px] lg:max-w-full' width="140" height="48" viewBox="0 0 140 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 15.9976V24.8839C3.02378 24.8818 6.0183 25.4784 8.81221 26.6398C11.6061 27.8011 14.1446 29.5043 16.2824 31.6519C18.4196 33.7987 20.1146 36.3475 21.2703 39.1526C22.4261 41.9576 23.0199 44.964 23.018 47.9997H31.8604C31.8524 39.5157 28.4933 31.3815 22.5202 25.3819C16.5472 19.3822 8.44802 16.0073 0 15.9976H0Z" fill="#F637EC"/>
                <path d="M44.2203 0H30.207C37.2961 4.51154 43.3028 10.543 47.7963 17.6615V3.58863C47.7956 2.63664 47.4186 1.72386 46.748 1.05093C46.0775 0.378005 45.1683 -2.35566e-07 44.2203 0Z" fill="#F637EC"/>
                <path d="M8.80468 0H0V8.00084C10.5603 8.01188 20.6849 12.2296 28.1523 19.7284C35.6197 27.2273 39.8198 37.3948 39.8311 48H47.7969V39.1579C45.9958 29.4398 41.3066 20.4973 34.3464 13.5076C27.3863 6.51787 18.4816 1.80868 8.80468 0Z" fill="#F637EC"/>
                <path d="M69.4706 5.28369H63.8583V33.6921H69.4706V5.28369Z" fill="#F637EC"/>
                <path d="M90.1062 17.5917C89.1719 16.7388 88.0783 16.0806 86.8887 15.6553C84.3334 14.7542 81.5487 14.7542 78.9934 15.6553C77.8034 16.0803 76.7093 16.7385 75.7747 17.5917C74.8581 18.4403 74.1259 19.4698 73.6238 20.6157C73.1049 21.8658 72.8378 23.2068 72.8378 24.5612C72.8378 25.9156 73.1049 27.2566 73.6238 28.5067C74.124 29.6559 74.8564 30.6882 75.7747 31.5383C76.7077 32.3921 77.8012 33.05 78.9909 33.4734C81.5459 34.3761 84.3312 34.3761 86.8862 33.4734C88.0764 33.05 89.1703 32.3921 90.1037 31.5383C91.0216 30.6879 91.7539 29.6556 92.2546 28.5067C92.7735 27.2566 93.0406 25.9156 93.0406 24.5612C93.0406 23.2068 92.7735 21.8658 92.2546 20.6157C91.753 19.4702 91.0216 18.4408 90.1062 17.5917ZM86.2523 27.9067C85.3435 28.7288 84.1636 29.1838 82.9405 29.1838C81.7173 29.1838 80.5375 28.7288 79.6286 27.9067C78.8648 26.9597 78.448 25.778 78.448 24.5593C78.448 23.3406 78.8648 22.1589 79.6286 21.2119C80.5375 20.3898 81.7173 19.9348 82.9405 19.9348C84.1636 19.9348 85.3435 20.3898 86.2523 21.2119C87.0161 22.1589 87.4329 23.3406 87.4329 24.5593C87.4329 25.778 87.0161 26.9597 86.2523 27.9067Z" fill="#F637EC"/>
                <path d="M110.255 17.8352H110.185C109.925 17.4692 109.624 17.1352 109.286 16.8398C108.878 16.477 108.426 16.1672 107.941 15.9177C106.714 15.2856 105.352 14.9634 103.974 14.9792C102.765 14.9579 101.57 15.2355 100.494 15.7876C99.4917 16.309 98.6063 17.0317 97.8932 17.9109C97.1661 18.8172 96.6082 19.8481 96.2468 20.9539C95.8624 22.0931 95.6665 23.2879 95.6669 24.4907C95.6527 25.7819 95.8683 27.0652 96.3034 28.2802C96.6976 29.389 97.3121 30.4058 98.1096 31.2688C98.9041 32.1134 99.8684 32.7786 100.938 33.2204C102.102 33.6966 103.349 33.9329 104.605 33.9152C105.534 33.899 106.453 33.7146 107.317 33.3707C108.286 33.0017 109.125 32.3546 109.73 31.5101H109.806V33.2785C109.827 33.8684 109.73 34.4565 109.521 35.0082C109.312 35.5599 108.996 36.064 108.59 36.4907C108.075 36.9484 107.472 37.2964 106.819 37.5135C106.166 37.7306 105.476 37.8124 104.791 37.7539C103.704 37.7661 102.627 37.5483 101.63 37.1147C100.638 36.6695 99.7122 36.0879 98.8794 35.3867L95.7738 40.0415C97.0432 41.0682 98.527 41.7941 100.115 42.1648C101.685 42.5276 103.292 42.7102 104.904 42.7093C108.446 42.7093 111.084 41.8137 112.817 40.0225C114.55 38.2314 115.417 35.6074 115.418 32.1505V15.4301H110.261L110.255 17.8352ZM109.918 26.1581C109.697 26.6928 109.372 27.1783 108.963 27.5867C108.547 28.0032 108.059 28.3405 107.523 28.5821C106.966 28.8303 106.364 28.9586 105.755 28.9586C105.146 28.9586 104.544 28.8303 103.987 28.5821C103.458 28.3371 102.977 28.0001 102.565 27.5867C102.154 27.1749 101.828 26.6857 101.606 26.1473C101.384 25.609 101.27 25.0319 101.27 24.4491C101.27 23.8662 101.384 23.2891 101.606 22.7508C101.828 22.2124 102.154 21.7233 102.565 21.3114C102.977 20.898 103.459 20.5607 103.987 20.3147C104.544 20.0674 105.146 19.9396 105.755 19.9396C106.364 19.9396 106.966 20.0674 107.523 20.3147C108.059 20.5573 108.547 20.8949 108.963 21.3114C109.581 21.9346 110.001 22.7273 110.171 23.5897C110.34 24.4521 110.253 25.3457 109.918 26.1581Z" fill="#F637EC"/>
                <path d="M136.503 17.5917C135.568 16.7388 134.475 16.0806 133.285 15.6553C130.73 14.7542 127.945 14.7542 125.39 15.6553C124.2 16.0803 123.106 16.7385 122.171 17.5917C121.255 18.4403 120.522 19.4698 120.02 20.6157C119.501 21.8658 119.234 23.2068 119.234 24.5612C119.234 25.9156 119.501 27.2566 120.02 28.5067C120.52 29.6559 121.253 30.6882 122.171 31.5383C123.105 32.3924 124.199 33.0503 125.39 33.4734C127.945 34.3761 130.73 34.3761 133.285 33.4734C134.475 33.05 135.569 32.3921 136.503 31.5383C137.421 30.6882 138.153 29.6559 138.654 28.5067C139.172 27.2566 139.44 25.9156 139.44 24.5612C139.44 23.2068 139.172 21.8658 138.654 20.6157C138.152 19.4698 137.419 18.4403 136.503 17.5917ZM132.649 27.9067C131.74 28.7288 130.56 29.1838 129.337 29.1838C128.114 29.1838 126.934 28.7288 126.025 27.9067C125.261 26.9597 124.844 25.778 124.844 24.5593C124.844 23.3406 125.261 22.1589 126.025 21.2119C126.934 20.3898 128.114 19.9348 129.337 19.9348C130.56 19.9348 131.74 20.3898 132.649 21.2119C133.413 22.1589 133.829 23.3406 133.829 24.5593C133.829 25.778 133.413 26.9597 132.649 27.9067Z" fill="#F637EC"/>
              </svg>
            </a>

            <ul className={`text-white navbar-list flex gap-[15px] md:gap-[40px] ${isActive ? 'active' : ''}`}>
              {
                navItems.map((item,index) => (
                  <li key={index}><a onClick={toggleMenu} className='hyperlink' href="#">{item}</a></li>
                ))
              }
              {
                isMobile ? (
                  <li>
                    <div className='inline-block relative'>
                      <a onClick={toggleMenu} className='btn' href="#">
                        <span className="squre-1"></span>
                        <span className="squre-2"></span>
                        <span className='content'>Contact us</span>
                      </a>
                    </div>
                  </li>
                ) : ""
              }
            </ul>

            <div className='gap-x-[10px] md:gap-x-[50px] flex '>
              <select className="appearance-none capitalize text-lg font-semibold px-5 bg-select-img bg-no-repeat bg-[length:15px] bg-center  bg-right outline-0 text-white bg-dark" name="languages" id="languages">
                <option value="hin">hindi</option>
                <option value="eng">eng</option>
                <option value="heb">Hebrew</option>
              </select>
              <div className='hidden lg:block inline-block relative'>
                <a className='btn' href="#">
                  <span className="squre-1"></span>
                  <span className="squre-2"></span>
                  <span className='content'>Contact us</span>
                </a>
              </div>

          </div>
          <div className="block lg:hidden">
            <button className={`flex flex-col items-center hamburger justify-center p-2 ml-3 ${isActive ? 'active' : ''} `} onClick={toggleMenu}>
              <div className="w-6 h-0.5 bg-white mb-[6px] "></div>
              <div className="w-6 h-0.5 bg-white mb-[6px] "></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </button>
          </div>
          </div>
        </div>       
      </nav>
    </header>
  )
}

export default Header