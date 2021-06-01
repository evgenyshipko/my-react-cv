import React, { useMemo } from 'react';
import { Header } from '@components/Header';

import './main_page.css';
import { ContentContainer } from '@components/ContentContainer';
import nsuLogo from 'src/assets/images/nsu_logo.svg';
import yandexLogo from 'src/assets/images/yandex-praktikum-logo.png';
import energozapas from 'src/assets/images/energozapas.png';
import itam from 'src/assets/images/itam.png';

import { SkillCard } from '@components/SkillCard';
import { ExperienceBlock } from '@components/ExperienceBlock';
import { SKILL_LIST } from '@src/data/SKILL_LIST';
import { MESSENGER_IMG } from '@src/data/MESSENGER_IMG';
import { VerticalGallery } from '@components/VerticalGallery';
import { CONTACTS } from '@src/data/CONTACTS';

export const MainPage = () => {
    const skills = useMemo(
        () =>
            SKILL_LIST.map((data) => {
                const [title, src] = data;

                return (
                    <SkillCard
                        title={title}
                        iconSource={src}
                        key={`${title}-${src}`}
                    />
                );
            }),
        []
    );

    return (
        <div className="main-page">
            <div className="main-page__wrapper">
                <Header contacts={CONTACTS} />
                <ContentContainer title="О себе" className="about-me-block">
                    Всем привет! Я - фронтенд-разработчик и это мой адаптивный
                    сайт-визитка, который запилил для души. Подробнее о моем
                    опыте разработки можно прочитать ниже.
                </ContentContainer>
                <ContentContainer title="Навыки" className="skills-container">
                    {skills}
                </ContentContainer>

                <ContentContainer title="Работа">
                    <ExperienceBlock
                        iconSource={energozapas}
                        yearEnd={2021}
                        yearStart={2019}
                        organization={'ООО "Энергозапас"'}
                        position={'Fullstack-разработчик'}
                    >
                        <div>
                            <br />
                            Проект представляет из себя ERP-систему для
                            внутреннего пользования компании, которая состоит из
                            двух частей: Atlassian Jira (используется в качестве
                            таск-трекера и "оцифровщика" бизнес-процессов
                            компании) с бэкендом на groovy/PostgreSQL и
                            отдельный проект на React/Typescript/MobX +
                            Django/PostgreSql (работа с табличными интерфейсами
                            отображения данных).
                            <br />
                            <br />
                            Обязанности:
                            <ul>
                                <li>
                                    разработка фронтенда на React с
                                    использованием библиотеки компонентов antd
                                </li>
                                <li>
                                    кастомизация интерфейса Jira с
                                    использованием JavaScript
                                </li>
                                <li>
                                    настройка бизнес-логики Jira (написание
                                    groovy-скриптов, рисование workflow,
                                    администрирование)
                                </li>
                                <li>разработка бэкэнда Django</li>
                                <li>
                                    настройка реляционных баз данных в
                                    PostgreSql (создание таблиц, триггеров,
                                    кастомных функций базы)
                                </li>
                                <li>
                                    работа в скрам-команде, состоящей из еще
                                    двух fullstack-программистов, продукт-овнера
                                    и тех.писателя.
                                </li>
                                <li>
                                    взаимодействие с системными
                                    администраторами.
                                </li>
                                <li>участие в постановке ТЗ</li>
                                <li>
                                    выяснение требований по разработке
                                    непосредственно от заказчика фичи
                                </li>
                                <li>
                                    таск-трекинг и документирование в
                                    Jira/Confluence
                                </li>
                                <li>найм и обучение новых сотрудников</li>
                            </ul>
                            Достижения:
                            <ul>
                                <li>с нуля поднял фронтенд для проекта</li>
                                <li>
                                    вынес в отдельную библиотеку компонент -
                                    обертку над табличной библиотекой, которая
                                    позволила избавиться от дублирования
                                    функционала по проекту
                                </li>
                                <li>
                                    внедрил правила оформления кода в проект
                                </li>
                                <li>
                                    выпустил законченный продукт: система
                                    складского учета
                                </li>
                                <li>
                                    вынес работу с функциями баз данных под git
                                </li>
                            </ul>
                        </div>
                    </ExperienceBlock>
                    <ExperienceBlock
                        iconSource={itam}
                        yearEnd={2019}
                        yearStart={2014}
                        organization={
                            'Институт Теоретической и Прикладной Механики СО РАН'
                        }
                        showLine={false}
                        position={'Лаборант-исследователь'}
                    >
                        <div>
                            <br />
                            В институте проходил учебную практику, выполнял
                            курсовые и занимался в основном экспериментальной
                            деятельностью.
                            <br />
                            <br />
                            Однажды настал момент, когда экспериментальные
                            данные уже невозможно было обрабатывать вручную -
                            пришлось освоить MATLAB.
                            <br />
                            <br />
                            В результате были написаны различные скрипты для
                            обработки данных, например скрипт для обработки
                            видеозаписей развития пограничного слоя за
                            проходящей ударной волной, который позволяет
                            выделить три основные стадии развития пограничного
                            слоя: ламинарную, переход и турбулентную.
                            <br />
                            <br />
                            Также была выполнена обработка изображений горения
                            электрического разряда в экспериментах по
                            исследованию температуры плазмы с использованием
                            методов цветовой и радиационной пирометрии.
                        </div>
                    </ExperienceBlock>
                </ContentContainer>

                <ContentContainer title="Образование">
                    <ExperienceBlock
                        iconSource={yandexLogo}
                        yearEnd={2021}
                        yearStart={2020}
                        organization={'Яндекс-практикум'}
                        position={'Middle Frontend разработчик'}
                    >
                        <div>
                            <br />
                            На курсе реализовал проект -{' '}
                            <a
                                href={
                                    'https://github.com/evgenyshipko/strong-messenger'
                                }
                                target="_blank"
                            >
                                мессенджер
                            </a>
                            . В нем реализовал ряд кастомных модулей:
                            шаблонизатор, аналог fetch, компонентный подход,
                            store, router.
                            <VerticalGallery itemSourceArr={MESSENGER_IMG} />
                            Также еще с двумя разработчиками выполнил командный
                            проект -{' '}
                            <a href="https://github.com/Praga-gamedev/space-death-canvas">
                                игру
                            </a>
                            . В проекте сверстал часть страниц, внес вклад в
                            механику игры, осуществил перевод с клиентской
                            версии на server-side rendering, полностью настроил
                            сборку, подключил Postgres, добавил темизацию,
                            добавил OAuth, настроил Яндекс-облако, настроил
                            виртуальную машину, добавил валидные
                            https-сертификаты, настроил github actions, nginx и
                            docker-сборку.
                        </div>
                    </ExperienceBlock>
                    <ExperienceBlock
                        iconSource={nsuLogo}
                        yearEnd={2018}
                        yearStart={2016}
                        organization={
                            'Новосибирский государственный университет'
                        }
                        position={'Магистр Физики'}
                    >
                        Физический факультет, Кафедра Аэрофизики и Газовой
                        динамики
                    </ExperienceBlock>
                    <ExperienceBlock
                        iconSource={nsuLogo}
                        yearEnd={2016}
                        yearStart={2014}
                        organization={
                            'Новосибирский государственный университет'
                        }
                        showLine={false}
                        position={'Бакалавр физики'}
                    >
                        Физический факультет, Кафедра Аэрофизики и Газовой
                        динамики
                    </ExperienceBlock>
                </ContentContainer>
            </div>
        </div>
    );
};
