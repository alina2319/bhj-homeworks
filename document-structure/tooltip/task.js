"use strict";

const hasTooltip = document.querySelectorAll(`.has-tooltip`);
const hasTooltipLength = hasTooltip.length;

let tooltipList;

function tooltipsMaker() {
    for (let i = 0; i < hasTooltipLength; i++) {
        hasTooltip[i].insertAdjacentHTML(`afterEnd`, `<div class="tooltip">${hasTooltip[i].title}</div>`);
    }

    tooltipList = document.querySelectorAll(`.tooltip`);

    for (let i = 0; i < hasTooltipLength; i++) {
        hasTooltip[i].addEventListener(`click`, function() {
            event.preventDefault();

            if ( tooltipList[i].classList.contains(`tooltip_active`) ) {
                tooltipList[i].classList.remove(`tooltip_active`);
            } else {
                tooltipListRemover();

                const leftIndent = hasTooltip[i].getBoundingClientRect().left;
                const topIndent = hasTooltip[i].getBoundingClientRect().top;
                const bottomIndent = hasTooltip[i].getBoundingClientRect().bottom;

                tooltipList[i].style = `left: ${leftIndent}px; top: ${topIndent + (bottomIndent - topIndent)}px`;

                tooltipList[i].classList.add(`tooltip_active`);
            }

            document.addEventListener(`scroll`, tooltipListRemover);
        });
    }
}

function tooltipListRemover() {
    for (let i = 0; i < tooltipList.length; i++) {
        tooltipList[i].classList.remove(`tooltip_active`);
    }
}

document.addEventListener(`DOMContentLoaded`, tooltipsMaker);