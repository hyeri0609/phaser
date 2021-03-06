/**
 * [description]
 *
 * @function Phaser.Actions.ToggleVisible
 * @since 3.0.0
 * 
 * @param {array} items - An array of Game Objects. The contents of this array are updated by this Action.
 * @return {array} The array of Game Objects that was passed to this Action.
 */
var ToggleVisible = function (items)
{
    for (var i = 0; i < items.length; i++)
    {
        items[i].visible = !items[i].visible;
    }

    return items;
};

module.exports = ToggleVisible;
