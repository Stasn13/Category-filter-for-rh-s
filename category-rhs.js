var input = document.getElementsByClassName("list-item");
			var arrSkill = [];
			for (let i = 0; i < input.length; i++) {
				input[i].addEventListener('click', function () {
					var str = input[i].nextElementSibling.firstElementChild.innerHTML.trim().substr(7);
					var tag = str.substr(0, str.length - 7);

					function hasSkill(has){
						return arrUserSkill.indexOf(has) != -1;
					}

					if (input[i].checked) {
						//next заменить на id в плагине

						arrSkill.push(tag);

						console.log(arrSkill)

						var cvList = document.getElementById("cv-list").children;
						for (let k = 0; k < cvList.length; k++) {
							cvList[k].style.display = "none";
							if (cvList[k].children[2] != undefined) {
								if (cvList[k].children[2].children.length != 0) {
									//console.log(cvList[i].children[2].children);
									//cvList[k].style.display = "none";
									var skillsList = cvList[k].children[2].children;
									var arrUserSkill = [];
									for (let j = 0; j < skillsList.length; j++) {
										//перебор скиллов, без списка
										var skill = skillsList[j].firstElementChild.innerHTML.trim();
										
										arrUserSkill.push(skill);

										if (j == skillsList.length-1) {
											console.log(arrUserSkill + " cycle ended");
											if(arrSkill.every(hasSkill)){
												cvList[k].style.display = "block";
											}
										}

										/* for (let u = 0; u < arrSkill.length; u++) {
											if (arrSkill[u] == skill) {
												cvList[k].style.display = "block";
												console.log("dich first IF, if");
											} else {
												console.log("dich first IF, else");
												cvList[k].style.display = "none";
											}
										} */
									}
								}
							}
						}
					} else {
						//when unchecked
						for (let m = 0; m < arrSkill.length; m++) {
							if (arrSkill[m] == tag) {
								arrSkill = arrSkill
									.filter(item => item != tag);
								console.log(arrSkill);

								var cvList = document.getElementById("cv-list").children;
								for (let k = 0; k < cvList.length; k++) {
									cvList[k].style.display = "none";
									if (cvList[k].children[2] != undefined) {
										if (cvList[k].children[2].children.length != 0) {
											//console.log(cvList[i].children[2].children);
											//cvList[k].style.display = "none";
											var skillsList = cvList[k].children[2].children;
											var arrUserSkill = [];
											for (let j = 0; j < skillsList.length; j++) {
												//перебор скиллов, без списка
												var skill = skillsList[j].firstElementChild.innerHTML.trim();

												arrUserSkill.push(skill);

												if (j == skillsList.length - 1) {
													console.log(arrUserSkill + " cycle ended");
													if (arrSkill.every(hasSkill)) {
														cvList[k].style.display = "block";
													}
												}

												/* for (let u = 0; u < arrSkill.length; u++) {
													if (arrSkill[u] == skill) {
														cvList[k].style.display = "block";
														console.log("dich first IF, if");
													} else {
														console.log("dich first IF, else");
														cvList[k].style.display = "none";
													}
												} */
											}
										}
									}
								}
							}
						}
					}
				})
			} 
