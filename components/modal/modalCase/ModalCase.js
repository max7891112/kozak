import close from '../modalForm/img/Vector.svg';
import {ROOT_MODAL_CASE_FIRST} from '../../../constants/_root.js';
import imageTrafic from './img/trafic.png';
import imageChart from './img/chart.png';
import imageTable from './img/table.png';
class ModalForm{
    render() {
        let htmlContent = ` 
            <div class="case" id="case-container" data-close="true">
                <div class="case__body _container" >
                    <img src="${close}" alt="close" class="case__close" data-close="true">
                    <div class="case__container">
                        <h2 class="case__title">4-х кратное увеличение количества заявок с Яндекс.Директ в экономический ВУЗ Москвы</h2>
                        <p class="case__client"><span>Клиент: </span>Педагогический ВУЗ в Москве</p>
                        <div class="case__task-container">
                            <p class="case__task-title"><span>Задача:</span></p>
                            <p class="case__task-text">обеспечить регулярное наполнение групп обучения по направлениям «Переподготовка» и «Повышение квалификации» для преподавателей учебных заведений и педагогов дошкольного образования.Набрать максимально возможное количество заявок в рамках выделяемого бюджета со средней стоимостью заявки не более 2500 руб.</p>
                        </div>
                        <div class="case__did-container">
                            <p class="case__did-title"><span>Что сделано:</span></p>
                            <ul class="case__did-ul">
                                <li class="case__did-li">Интервьюирование клиента и погружение с его помощью в особенности данного бизнеса.</li>
                                <li class="case__did-li">Проведен анализ сайта клиента, прямых конкурентов, потенциальной целевой аудитории.</li>
                                <li class="case__did-li">Определен путь клиента, возможные точки касания его нашей рекламой.</li>
                                <li class="case__did-li">Разработаны и предложены изменения в сайт для улучшения конверсии.</li>
                                <li class="case__did-li">Предложено планирование рекламного бюджета, определены приоритетные направления</li>
                                <li class="case__did-li">Определена главная цель для измерения результативности рекламы и сопутствующие микроцели для более быстрой оптимизации рекламных кампаний с выведением их на автоматические стратегии с оплатой за заявку.</li>
                                <li class="case__did-li">Поэтапное создание, запуск и оптимизация рекламных кампаний на поиске, в сетях и мастер кампании.</li>
                            </ul>
                        </div>
                        <div class="case__results-container">
                            <p class="case__results-title"><span>Результаты:</span></p>
                            <ul class="case__results-ul">
                                <li class="case__results-li">В совокупности для проекта создано несколько десятков рекламных кампаний, более <span>3000</span> объявлений</li>
                                <li class="case__results-li">Все рекламные кампании постепенно выведены на режим работы с оплатой только за заявку</li>
                                <li class="case__results-li">Средняя цена заявки осталась в пределах не более <span>2000  ₽</span></li>
                                <li class="case__results-li">За период с мая 2022 по январь 2023 количество заявок на обучение увеличено в <span>7</span> раз - <span>121</span> в мае 2022 и <span>831</span> в январе 2023.</li>
                            </ul>
                        </div>
                        <div class="case__img-container">
                            <img src="${imageTrafic}"></img>
                            <img src="${imageChart}"></img>
                            <img src="${imageTable}"></img>
                        </div>
                        
                    </div>
                </div>
            </div>
            `;
                const htmlWrapper = `
                <div class="case__wrapper">
                    ${htmlContent}
                </div>
            `;
    
            ROOT_MODAL_CASE_FIRST.innerHTML = htmlWrapper;
    }
    
    open() {
        this.render();
        document.querySelector('.case__body').classList.add('open'); // анимации появления окна
        document.querySelector('.case').classList.add('open');
    }

    close() {   
        let modal = document.querySelector('.case');
    
        let modalWindow = document.querySelector('.case__body');
        if(modal) {
            modalWindow.classList.remove('open');
            modalWindow.parentElement.classList.remove('open');
            modalWindow.classList.add('disappearance');
            modalWindow.parentElement.classList.add('disappearance');
            setTimeout(() => {
                modalWindow.classList.remove('disappearance');
                modalWindow.parentElement.classList.remove('disappearance');
                ROOT_MODAL_CASE_FIRST.innerHTML = ''
            },300);
        };
    }; 
}
export default new ModalForm()