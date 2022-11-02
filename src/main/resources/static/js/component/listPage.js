define(function() {
    return function(tableId, url, columns) {
        return {
            rows: [
                {
                    view: 'toolbar',
                    cols: [
                        {
                            view: 'button',
                            label: 'Add',
                            click: function() {
                                var markList = $$(tableId)
                                var id = markList.add({})
                                markList.editRow(id)
                            }
                        }
                    ]
                },
                {
                    id: tableId,
                    view: 'datatable',
                    columns: columns,
                    url: url,
                    save: url,
                    autoheight: true,
                    autowidth: true,
                    editable: true,
                    pager: tableId + 'Pager',
                    datafetch: 10,
                    on: {
                        onItemClick: function(id) {
                            var column = this.config.columns.find(function(col) {
                                return col.id === id.column
                            })
                            var parentTable = this

                            if (column.dialogUrl) {
                                require([column.dialogUrl], function(dialogPage) {
                                    webix.ui({
                                        id: 'win3',
                                        view: 'window',
                                        width: 400,
                                        position: 'center',
                                        modal: true,
                                        close: true,
                                        head:{
                                            view:"toolbar", cols:[
                                                { width:4 },
                                                { view:"label", label: "Choose" },
                                                { view:"button", label: 'Close Me', width: 100, align: 'right', click:function(){ $$('win3').close(); }}
                                            ]
                                        },
                                        body: dialogPage,
                                        parentTable: parentTable,
                                        cell: id,
                                    }).show()
                                })
                            }
                        }
                    }
                },
                {
                    view: 'pager',
                    id: tableId + 'Pager',
                    size: 10,
                    group: 10,
                    template: '{common.first()}{common.prev()}{common.pages()}{common.next()}{common.last()}'
                }
            ]
        }
    }
})
