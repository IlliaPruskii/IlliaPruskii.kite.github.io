let menuBurger = {
	burger: document.getElementById('menu_burger'),
	mobileMenu: document.getElementById('header_menu'),

	start: function(){
		let that = this;
		this.burger.addEventListener('click', function(e){
			that.addBurgerClass(e);
		});
		this.burger.addEventListener('click', function(e){
			that.addMobileMenuClass(e);
		});
	},

	addBurgerClass: function(){
		this.burger.classList.toggle('active_burger');
	},

	addMobileMenuClass: function(){
		this.mobileMenu.classList.toggle('active_header_menu');
	},
	addMobileMenuClass: function(){
		this.mobileMenu.classList.toggle('active_header_menu');
	},
}

menuBurger.start();


let timer = {
	getTimeValue: function(deadline){
		let timeRemaining = Date.parse(deadline) - Date.parse(new Date());
		let seconds = Math.floor((timeRemaining/1000) % 60); 
		let minutes = Math.floor((timeRemaining/(1000 * 60)) % 60); 
		let hours = Math.floor((timeRemaining/(1000 * 60 * 60)) % 24); 
		let days = Math.floor(timeRemaining/(1000 * 60 * 60 * 24));
		return timeValue = {
			'timeRemaining': timeRemaining,
			'seconds': seconds,
			'minutes': minutes,
			'hours': hours,
			'days': days,
		}
	},

	addZero: function(number){
		if(number <= 9){
			number = '0' + number;
		}
		return number;
	},

	start: function(id, deadline){
		let that = this;
		moveTimeValue(id, deadline);
		let timer = setInterval( function() { moveTimeValue(id,deadline); }, 1000);

		function moveTimeValue(id, deadline){
			let timeValue = that.getTimeValue(deadline);
			let timerBlock = document.getElementById(id);
			let seconds = timerBlock.querySelector('#seconds');
			let minutes = timerBlock.querySelector('#minutes');
			let hours = timerBlock.querySelector('#hours');
			let days = timerBlock.querySelector('#days');

			seconds.textContent = that.addZero(timeValue.seconds);
			minutes.textContent = that.addZero(timeValue.minutes);
			hours.textContent = that.addZero(timeValue.hours);
			days.textContent = that.addZero(timeValue.days);

			if(timeValue.timeRemaining <= 9){
				seconds.textContent = '00';
				minutes.textContent = '00';
				hours.textContent = '00';
				days.textContent = '00';
			}
		}

	},
}

timer.start('timer', '2020-11-29');

// let scrollBtn = {
// 	start: function(){
// 		let that = this;
// 		document.addEventListener('click', function(e){
// 			that.scroll(e)
// 		})
// 	}, 

// 	scroll: function(e){
// 		if(e.target.classList.contains('bottom_scroll')){
// 			let parentElement = e.path[4];
// 			let elementPlace = parentElement.getClientRects();
// 			let coordinateY = elementPlace[0].y;
// 			let elementHeight = elementPlace[0].height;
// 			let curentScroll = window.pageYOffset; 
// 			let scrollDistance = curentScroll + elementHeight + coordinateY;
// 			let timer = setInterval(scroll, 1);
// 			function scroll() {
// 				window.scrollTo(0, curentScroll);
// 				curentScroll += 5;
// 				if(curentScroll > scrollDistance -5){
// 					window.scrollTo(0, scrollDistance);
// 					clearInterval(timer);
// 				}
// 			}
// 		} else if(e.target.classList.contains('top_scroll')){
// 			let timer = setInterval(scroll, 1);
// 			let curentScroll = window.pageYOffset; 
// 			function scroll() {
// 				window.scrollTo(0, curentScroll);
// 				curentScroll -= 20;
// 				if(curentScroll < 20){
// 					clearInterval(timer);
// 					window.scrollTo(0, 0);
// 				}
// 			}
// 		} else {
// 			return false;
// 		}
// 	}
// }


// scrollBtn.start()


let scrollBtn = {
	scrollBtns: document.querySelectorAll('.scroll_button'),

	start: function(){
		let that = this;
		for (var i = 0; i < this.scrollBtns.length; i++) {
			this.scrollBtns[i].addEventListener('click', function(e) {
				that.scroll(e);
			})
		}
	}, 

	scroll: function(e){
		if(e.currentTarget.classList.contains('bottom_scroll')){
			let clickElem = e.currentTarget;
			let sectionName = clickElem.dataset['section'];
			let parentElement = document.querySelector(sectionName);
			let elementPlace = parentElement.getClientRects();
			let coordinateY = elementPlace[0].y;
			let elementHeight = elementPlace[0].height;
			let curentScroll = window.pageYOffset; 
			let scrollDistance = curentScroll + elementHeight + coordinateY;
			let timer = setInterval(scroll, 1);
			function scroll() {
				window.scrollTo(0, curentScroll);
				curentScroll += 5;
				if(curentScroll > scrollDistance -5){
					window.scrollTo(0, scrollDistance);
					clearInterval(timer);
				}
			}
		} else if(e.target.classList.contains('top_scroll')){
			let timer = setInterval(scroll, 1);
			let curentScroll = window.pageYOffset; 
			function scroll() {
				window.scrollTo(0, curentScroll);
				curentScroll -= 20;
				if(curentScroll < 20){
					clearInterval(timer);
					window.scrollTo(0, 0);
				}
			}
		} else {
			return false;
		}
	}
}

scrollBtn.start()


//Get position start

let elementPosition = {
	getPosition: function(el){
		const rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
	}
}

//Get position end

//Activate header menu start

let activateMenuItems = {
	menuItems: document.querySelectorAll('.header__list-link'),
	sections: document.querySelectorAll('section'),

	start: function(){
		let that = this;
		window.addEventListener('scroll', function(){
			that.activeteMenuItems();
		})
	},

	activeteMenuItems: function(){
		for (var i = 0; i < this.sections.length; i++) {
			let section = this.sections[i];
			let sectionHeight = section.offsetHeight;
			let sectionTopPosition = elementPosition.getPosition(section).top;
			let windowHeight = window.innerHeight;
			if((pageYOffset + windowHeight - 200 <= sectionTopPosition + sectionHeight) && 
				(pageYOffset + windowHeight - 200 > sectionTopPosition)){
				this.menuItems[i].classList.add('active-menu-item');
			} else {
				this.menuItems[i].classList.remove('active-menu-item');
			}
			                                                 
		}
	}
}

activateMenuItems.activeteMenuItems();
activateMenuItems.start();

//Activate header menu end




