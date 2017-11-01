define( ['text!./style.css',
		 './properties'],
    function (styleCss, properties ) {
		$('<style>').html(styleCss).appendTo('head');
		'use strict';
		
		function Block(measureName,value, bar) {
			this.value = value;
			this.measureName = measureName;
			this.bar = bar;
			
		}
		
		Block.prototype.print = function() {
			if (this.bar) {
				return `<div class="list__skale-block">
		                <p class="list__percent">${this.value}
		                    <!-- <span class="span list__percent-symbol">%</span> -->
		                </p>
		                <p class="list__label">${this.measureName}</p>
		                <div class="list__skale-container">
		                    <div class="list__skale-value list__skale-value--green" style="width: ${this.value}"></div>
		                </div>
		            </div>`;
			} else {
				return  `<div class="list__data-block">
											<div class="list__data">
													<p class="list__label">${this.measureName}</p>
											</div>

											<div class="list__data">
													<p class="list__value">${this.value}</p>
													<!-- <p class="list__label"></p> -->
											</div>
									</div>`;
			}

		}

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
				let mInfo = layout.qHyperCube.qMeasureInfo;

				
				let mNames = mInfo.map((item,i) => {
					return { name: layout.props['mera' + i] ? layout.props['mera' + i] : mInfo[i].qFallbackTitle, bar: item.bar };
				});
				
				
				let blocks = mNames.map(item => {
					
				})
			
				
				var qMatrix = layout.qHyperCube.qDataPages[0].qMatrix;


				data = qMatrix.map(function (d, i) {

					return {
						"image_url": d[0] ? d[0].qText : '',
						"article":  d[1] ? d[1].qText : '',
						"title":  d[2] ? d[2].qText : '',
						"price": d[3] ? d[3].qText : '',
						"mera1": d[4] ? new Block(mNames[0].name,d[4].qText, mNames[0].bar) : '',
						"mera2": d[5] ? new Block(mNames[1].name,d[5].qText, mNames[1].bar) : '',
						"mera3": d[6] ? new Block(mNames[2].name,d[6].qText, mNames[2].bar) : '',
						"mera4": d[7] ? new Block(mNames[3].name,d[7].qText, mNames[3].bar): '',
						"mera5": d[8] ? new Block(mNames[4].name,d[8].qText, mNames[4].bar) : '',
						"mera6": d[9] ? new Block(mNames[5].name,d[9].qText, mNames[5].bar) : '',
						"mera7": d[10] ? new Block(mNames[6].name,d[10].qText, mNames[6].bar) : '',
						"mera8": d[11] ? new Block(mNames[7].name,d[11].qText, mNames[7].bar) : '',
						"mera9": d[12] ? new Block(mNames[8].name,d[12].qText, mNames[8].bar) : '',
						"mera10": d[13] ? new Block(mNames[9].name,d[13].qText, mNames[9].bar) : '',
						"mera11": d[14] ? new Block(mNames[10].name,d[14].qText, mNames[10].bar) : '',
						"mera12": d[15] ? new Block(mNames[11].name,d[15].qText, mNames[11].bar) : ''
					};
				});

				var table = '<div class="container"><div class="container__wrapper">';

					

				data.forEach(function(element, i) {

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
										<!--1-->
										${element.mera1.print()}
										
										<!-- 2 -->
										${element.mera2.print()}
										
										<!-- 3 -->
										${element.mera3.print()}
										
										<!-- 4 -->
										${element.mera4.print()}
										
									</div>
									<!-- 2 -->
									<div class="list">
										<!--5-->
										${element.mera5.print()}
										
										<!--6-->
										${element.mera6.print()}
										
										<!--7-->
										${element.mera7.print()}
										
										<!--8-->
										${element.mera8.print()}
										</div>
									<!-- 3 -->
									<div class="list">
										<!--9-->
										${element.mera9.print()}
										
										<!--10-->
										${element.mera10.print()}
										
										<!--11-->
										${element.mera11.print()}
										
										<!--12-->
										${element.mera12.print()}
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