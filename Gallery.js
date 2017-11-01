define( ['text!./style.css',
		 './properties'],
    function (styleCss, properties ) {
		$('<style>').html(styleCss).appendTo('head');
		'use strict';
		

        return {
            definition: properties,
			initialProperties: {
				qHyperCubeDef: {
					qDimensions: [],
					qMeasures: [],
					qInitialDataFetch: [
						{
							qWidth: 16,
							qHeight: 10
						}
					]
				}
			},
			paint: function ( $element, layout ) {
				$element.empty();
				
				//Определяем кто бар кто не бар
				// var bars = layout.qHyperCube.qMeasureInfo.map(function(item) {
				// 	return item.bar;
				// });

				// console.log(bars);

				var qMatrix = layout.qHyperCube.qDataPages[0].qMatrix;


				data = qMatrix.map(function (d, i) {

					return {
						"image_url": d[0] ? d[0].qText : 1,
						"article":  d[1] ? d[1].qText : 1,
						"title":  d[2] ? d[2].qText : 1,
						"price": d[3] ? d[3].qText : 1,
						"mera1": d[4] ? d[4].qText : 1,
						"mera2": d[5] ? d[5].qText : 1,
						"mera3": d[6] ? d[6].qText : 1,
						"mera4": d[7] ? d[7].qText : 1,
						"mera5": d[8] ? d[8].qText : 1,
						"mera6": d[9] ? d[9].qText : 1,
						"mera7": d[10] ? d[10].qText : 1,
						"mera8": d[11] ? d[11].qText : 1,
						"mera9": d[12] ? d[12].qText : 1,
						"mera10": d[13] ? d[13].qText : 1,
						"mera11": d[14] ? d[14].qText : 1,
						"mera12": d[15] ? d[15].qText : 1
					};
				});

				console.log(data);
				var table = '<div class="container"><div class="container__wrapper">';

					

				data.forEach(function(element, i) {

					let mera1 = `<h1>${element.mera1}</h1>`,
						mera2 = `<h1>${element.mera2}</h1>`,
						mera3 = `<h1>${element.mera3}</h1>`,
						mera4 = `<h1>${element.mera4}</h1>`,
						mera5 = `<h1>${element.mera5}</h1>`,
						mera6 = `<h1>${element.mera6}</h1>`,
						mera7 = `<h1>${element.mera7}</h1>`,
						mera8 = `<h1>${element.mera8}</h1>`,
						mera9 = `<h1>${element.mera9}</h1>`,
						mera10 = `<h1>${element.mera10}</h1>`,
						mera11 = `<h1>${element.mera11}</h1>`,
						mera12 = `<h1>${element.mera12}</h1>`;

					let indexForOutput= i + 1;
					table += `<section class="elem elem__${i}" >
								<div class="elem__img-block">
									<img src="${element.image_url}" alt="" class="elem__img">
									<span class="elem__counter">${indexForOutput}</span> 
								</div>
								<div class="elem__info-block">
									<p class="elem__article">${element.article}</p>
									<p class="elem__name">${element.title}</p>
									<p class="elem__cost">
										${element.price}${layout.props.currency}
									</p>
								</div>
								
								<input type="radio" id="list-1${i}" name="list" class="list__control-radio" checked>
								<input type="radio" id="list-2${i}" name="list" class="list__control-radio">
								<input type="radio" id="list-3${i}" name="list" class="list__control-radio">

								<div class="list__control-block">
									<label for="list-1${i}" class="list__control list__control--selected">${layout.props.tab_title1}</label>
									<label for="list-2${i}" class="list__control">${layout.props.tab_title2}</label>
									<label for="list-3${i}" class="list__control">${layout.props.tab_title3}</label>
								</div>

								<div class="elem__list-container">
									<div class="list list--selected">
										${mera1}
										${mera2}
										${mera3}
										${mera4}
									</div>
									<!-- 2 -->
									<div class="list">
										${mera5}
										${mera6}
										${mera7}
										${mera8}
									</div>
									<!-- 3 -->
									<div class="list">
										${mera9}
										${mera10}
										${mera11}
										${mera12}
									</div>
						
								</div>
								
								</section>`;
				});
				table += "</div></div>";
				$element.append(table);

				$('.list__control').on('click', function(e) {
					let index = $(this).parent().parent().index();
					let innerIndex = $(this).index() + 1;
					$(`.elem__${index}`).find('.list__control').removeClass('list__control--selected');
					$(`.elem__${index}`).find('.list').removeClass('list--selected');
					$(`.elem__${index}`).find(`.list__control:nth-of-type(${innerIndex})`).addClass('list__control--selected');
					$(`.elem__${index}`).find(`.list:nth-of-type(${innerIndex})`).addClass('list--selected');
				});
			}
        };
    } );