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

export const MainPage = () => {
    const skills = useMemo(
        () =>
            SKILL_LIST.map((data) => (
                <SkillCard title={data[0]} iconSource={data[1]} />
            )),
        []
    );

    return (
        <div className="main-page">
            <div className="main-page__wrapper">
                <Header />
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
                        content={
                            <div>
                                <br />
                                Проект представляет из себя ERP-систему для
                                внутреннего пользования компании, которая
                                состоит из двух частей: Atlassian Jira
                                (используется в качестве таск-трекера и
                                "оцифровщика" бизнес-процессов компании) с
                                бэкендом на groovy/PostgreSQL и отдельный проект
                                на React/Typescript/MobX + Django/PostgreSql
                                (работа с табличными интерфейсами отображения
                                данных).
                                <br />
                                <br />
                                Обязанности:
                                <ul>
                                    <li>
                                        настройка бизнес-логики Jira (написание
                                        groovy-скриптов, рисование workflow,
                                        администрирование)
                                    </li>
                                    <li>разработка интерфейсов на React</li>
                                    <li>разработка бэкэнда Django</li>
                                    <li>
                                        настройка реляционных баз данных в
                                        PostgreSql (создание таблиц, триггеров,
                                        кастомных функций базы)
                                    </li>
                                    <li>
                                        работа в скрам-команде, состоящей из еще
                                        двух fullstack-программистов,
                                        продукт-овнера и тех.писателя.
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
                                        обертку над табличной библиотекой,
                                        которая позволила избавиться от
                                        дублирования функционала по проекту
                                    </li>
                                    <li>
                                        внедрил правила оформления кода в проект
                                    </li>
                                    <li>
                                        выпустил законченный продукт: система
                                        складского учета
                                    </li>
                                    <li>
                                        вынес работу с функциями баз данных под
                                        git
                                    </li>
                                </ul>
                            </div>
                        }
                    />
                    <ExperienceBlock
                        iconSource={itam}
                        yearEnd={2019}
                        yearStart={2014}
                        organization={
                            'Институт Теоретической и Прикладной Механики СО РАН'
                        }
                        showLine={false}
                        position={'Лаборант-исследователь'}
                        content={
                            <div>
                                <br />
                                В программной среде MATLAB разработан скрипт для
                                обработки видеозаписей развития пограничного
                                слоя за проходящей ударной волной, который
                                позволяет выделить три основные стадии развития
                                пограничного слоя.
                                <br />
                                <br />
                                Выполнена автоматизация обработки
                                экспериментальных данных в экспериментах по
                                исследованию температуры плазмы электрического
                                разряда с использованием методов цветовой и
                                радиационной пирометрии.
                            </div>
                        }
                    />
                </ContentContainer>

                <ContentContainer title="Образование">
                    <ExperienceBlock
                        iconSource={yandexLogo}
                        yearEnd={2021}
                        yearStart={2020}
                        organization={'Яндекс-практикум'}
                        content={
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
                                <br />
                                <br />
                                Также еще с двумя разработчиками выполнил
                                командный проект -{' '}
                                <a href="https://github.com/Praga-gamedev/space-death-canvas">
                                    игру
                                </a>
                                . В проекте сверстал часть страниц, внес вклад в
                                механику игры, осуществил перевод с клиентской
                                версии на server-side rendering, полностью
                                настроил сборку, подключил Postgres, добавил
                                темизацию, добавил OAuth, настроил
                                Яндекс-облако, настроил виртуальную машину,
                                добавил валидные https-сертификаты, настроил
                                github actions, nginx и docker-сборку.
                            </div>
                        }
                        position={'Выпускник'}
                    />
                    <ExperienceBlock
                        iconSource={nsuLogo}
                        yearEnd={2018}
                        yearStart={2016}
                        organization={
                            'Новосибирский государственный университет'
                        }
                        content={
                            'Физический факультет, Кафедра Аэрофизики и Газовой динамики'
                        }
                        position={'Магистр Физики'}
                    />
                    <ExperienceBlock
                        iconSource={nsuLogo}
                        yearEnd={2016}
                        yearStart={2014}
                        organization={
                            'Новосибирский государственный университет'
                        }
                        content={
                            'Физический факультет, Кафедра Аэрофизики и Газовой динамики, Специальность: Физик'
                        }
                        showLine={false}
                        position={'Бакалавр физики'}
                    />
                </ContentContainer>
            </div>
        </div>
    );
};
