

const CheckboxRadio = () => {

    return (
        <div>
            <div className="space-y-8 pt-5">
                <div className="space-y-8" id="checkbox">
                    {/* Checkbox */}
                    <h4 className="badge mb-0 inline-block bg-primary text-base hover:top-0">Checkbox</h4>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="panel">
                            <div className="mb-5">
                                <h5 className="text-lg font-semibold dark:text-white-light">Default</h5>
                            </div>
                            <div className="mb-5">
                                <div className="space-y-2">
                                    <div>
                                        <label className="inline-flex gap-2 gap-2">
                                            <input type="checkbox" className="form-checkbox" defaultChecked />
                                            <span>Primary</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="checkbox" className="form-checkbox text-success" />
                                            <span>Success</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="checkbox" className="form-checkbox text-secondary" />
                                            <span>Secondary</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="checkbox" className="form-checkbox text-danger" />
                                            <span>Danger</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="checkbox" className="form-checkbox text-warning" />
                                            <span>Warning</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="checkbox" className="form-checkbox text-info" />
                                            <span>Info</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="checkbox" className="form-checkbox text-dark" />
                                            <span>Dark</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel">
                            <div className="mb-5">
                                <h5 className="text-lg font-semibold dark:text-white-light">Default Rounded</h5>
                            </div>
                            <div className="mb-5">
                                <div className="space-y-2">
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="checkbox" className="form-checkbox rounded-full" defaultChecked />
                                            <span>Primary</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="checkbox" className="form-checkbox rounded-full text-success" />
                                            <span>Success</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="checkbox" className="form-checkbox rounded-full text-secondary" />
                                            <span>Secondary</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="checkbox" className="form-checkbox rounded-full text-danger" />
                                            <span>Danger</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="checkbox" className="form-checkbox rounded-full text-warning" />
                                            <span>Warning</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="checkbox" className="form-checkbox rounded-full text-info" />
                                            <span>Info</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="checkbox" className="form-checkbox rounded-full text-dark" />
                                            <span>Dark</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel">
                            <div className="mb-5 flex items-center justify-between">
                                <h5 className="text-lg font-semibold dark:text-white-light">Outline</h5>
                               
                            </div>
                            <div className="mb-5">
                                <div className="space-y-2">
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="checkbox" className="form-checkbox outline-primary" defaultChecked />
                                            <span>Primary</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="checkbox" className="form-checkbox outline-success" />
                                            <span>Success</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="checkbox" className="form-checkbox outline-secondary" />
                                            <span>Secondary</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="checkbox" className="form-checkbox outline-danger" />
                                            <span>Danger</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="checkbox" className="form-checkbox outline-warning" />
                                            <span>Warning</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="checkbox" className="form-checkbox outline-info" />
                                            <span>Info</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="checkbox" className="form-checkbox outline-dark" />
                                            <span>Dark</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel">
                            <div className="mb-5 flex items-center justify-between">
                                <h5 className="text-lg font-semibold dark:text-white-light">Outline Rounded</h5>
                                
                            </div>
                            <div className="mb-5">
                                <div className="space-y-2">
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="checkbox" className="form-checkbox rounded-full outline-primary" defaultChecked />
                                            <span>Primary</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="checkbox" className="form-checkbox rounded-full outline-success" />
                                            <span>Success</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="checkbox" className="form-checkbox rounded-full outline-secondary" />
                                            <span>Secondary</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="checkbox" className="form-checkbox rounded-full outline-danger" />
                                            <span>Danger</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="checkbox" className="form-checkbox rounded-full outline-warning" />
                                            <span>Warning</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="checkbox" className="form-checkbox rounded-full outline-info" />
                                            <span>Info</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="checkbox" className="form-checkbox rounded-full outline-dark" />
                                            <span>Dark</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="panel">
                            <div className="mb-5 flex items-center justify-between">
                                <h5 className="text-lg font-semibold dark:text-white-light">Default Text Color</h5>
                            </div>
                            <div className="mb-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox" defaultChecked />
                                                <span className="peer-checked:text-primary">Primary</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox text-success" />
                                                <span className="peer-checked:text-success">Success</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox text-secondary" />
                                                <span className="peer-checked:text-secondary">Secondary</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox text-danger" />
                                                <span className="peer-checked:text-danger">Danger</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox text-warning" />
                                                <span className="peer-checked:text-warning">Warning</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox text-info" />
                                                <span className="peer-checked:text-info">Info</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox text-dark" />
                                                <span className="peer-checked:text-dark">Dark</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox outline-primary" defaultChecked />
                                                <span className="peer-checked:text-primary">Primary</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox outline-success" />
                                                <span className="peer-checked:text-success">Success</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox outline-secondary" />
                                                <span className="peer-checked:text-secondary">Secondary</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox outline-danger" />
                                                <span className="peer-checked:text-danger">Danger</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox outline-warning" />
                                                <span className="peer-checked:text-warning">Warning</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox outline-info" />
                                                <span className="peer-checked:text-info">Info</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox outline-dark" />
                                                <span className="peer-checked:text-dark">Dark</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel">
                            <div className="mb-5">
                                <h5 className="text-lg font-semibold dark:text-white-light">Rounded Text Color</h5>
                                
                            </div>
                            <div className="mb-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox rounded-full" defaultChecked />
                                                <span className="peer-checked:text-primary">Primary</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox rounded-full text-success" />
                                                <span className="peer-checked:text-success">Success</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox rounded-full text-secondary" />
                                                <span className="peer-checked:text-secondary">Secondary</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox rounded-full text-danger" />
                                                <span className="peer-checked:text-danger">Danger</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox rounded-full text-warning" />
                                                <span className="peer-checked:text-warning">Warning</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox rounded-full text-info" />
                                                <span className="peer-checked:text-info">Info</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox rounded-full text-dark" />
                                                <span className="peer-checked:text-dark">Dark</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox rounded-full outline-primary" defaultChecked />
                                                <span className="peer-checked:text-primary">Primary</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox rounded-full outline-success" />
                                                <span className="peer-checked:text-success">Success</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox rounded-full outline-secondary" />
                                                <span className="peer-checked:text-secondary">Secondary</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox rounded-full outline-danger" />
                                                <span className="peer-checked:text-danger">Danger</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox rounded-full outline-warning" />
                                                <span className="peer-checked:text-warning">Warning</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox rounded-full outline-info" />
                                                <span className="peer-checked:text-info">Info</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="inline-flex gap-2">
                                                <input type="checkbox" className="peer form-checkbox rounded-full outline-dark" />
                                                <span className="peer-checked:text-dark">Dark</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-8" id="radio">
                    {/* Radio */}
                    <h4 className="badge mb-0 inline-block bg-primary text-base hover:top-0">Radio</h4>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="panel">
                            <div className="mb-5 flex items-center justify-between">
                                <h5 className="text-lg font-semibold dark:text-white-light">Default</h5>
                                
                            </div>
                            <div className="mb-5">
                                <div className="space-y-2">
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="default_radio" className="form-radio" defaultChecked />
                                            <span>Primary</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="default_radio" className="form-radio text-success" />
                                            <span>Success</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="default_radio" className="form-radio text-secondary" />
                                            <span>Secondary</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="default_radio" className="form-radio text-danger" />
                                            <span>Danger</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="default_radio" className="form-radio text-warning" />
                                            <span>Warning</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="default_radio" className="form-radio text-info" />
                                            <span>Info</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="default_radio" className="form-radio text-dark" />
                                            <span>Dark</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel">
                            <div className="mb-5 flex items-center justify-between">
                                <h5 className="text-lg font-semibold dark:text-white-light">Square</h5>
                                
                            </div>
                            <div className="mb-5">
                                <div className="space-y-2">
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="square_radio" className="form-radio rounded-none" defaultChecked />
                                            <span>Primary</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="square_radio" className="form-radio rounded-none text-success" />
                                            <span>Success</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="square_radio" className="form-radio rounded-none text-secondary" />
                                            <span>Secondary</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="square_radio" className="form-radio rounded-none text-danger" />
                                            <span>Danger</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="square_radio" className="form-radio rounded-none text-warning" />
                                            <span>Warning</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="square_radio" className="form-radio rounded-none text-info" />
                                            <span>Info</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="square_radio" className="form-radio rounded-none text-dark" />
                                            <span>Dark</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel">
                            <div className="mb-5 flex items-center justify-between">
                                <h5 className="text-lg font-semibold dark:text-white-light">Outline</h5>
                               
                            </div>
                            <div className="mb-5">
                                <div className="space-y-2">
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="outline_radio" className="form-radio outline-primary" defaultChecked />
                                            <span>Primary</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="outline_radio" className="form-radio outline-success" />
                                            <span>Success</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="outline_radio" className="form-radio outline-secondary" />
                                            <span>Secondary</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="outline_radio" className="form-radio outline-danger" />
                                            <span>Danger</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="outline_radio" className="form-radio outline-warning" />
                                            <span>Warning</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="outline_radio" className="form-radio outline-info" />
                                            <span>Info</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="outline_radio" className="form-radio outline-dark" />
                                            <span>Dark</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel">
                            <div className="mb-5 flex items-center justify-between">
                                <h5 className="text-lg font-semibold dark:text-white-light">Default Text Color</h5>
                                
                            </div>
                            <div className="mb-5">
                                <div className="space-y-2">
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="default_text_color" className="peer form-radio" defaultChecked />
                                            <span className="peer-checked:text-primary">Primary</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="default_text_color" className="peer form-radio text-success" />
                                            <span className="peer-checked:text-success">Success</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="default_text_color" className="peer form-radio text-secondary" />
                                            <span className="peer-checked:text-secondary">Secondary</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="default_text_color" className="peer form-radio text-danger" />
                                            <span className="peer-checked:text-danger">Danger</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="default_text_color" className="peer form-radio text-warning" />
                                            <span className="peer-checked:text-warning">Warning</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="default_text_color" className="peer form-radio text-info" />
                                            <span className="peer-checked:text-info">Info</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="default_text_color" className="peer form-radio text-dark" />
                                            <span className="peer-checked:text-dark">Dark</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel">
                            <div className="mb-5 flex items-center justify-between">
                                <h5 className="text-lg font-semibold dark:text-white-light">Square Text Color</h5>
                                
                            </div>
                            <div className="mb-5">
                                <div className="space-y-2">
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="square_text_radio" className="peer form-radio rounded-none" defaultChecked />
                                            <span className="peer-checked:text-primary">Primary</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="square_text_radio" className="peer form-radio rounded-none text-success" />
                                            <span className="peer-checked:text-success">Success</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="square_text_radio" className="peer form-radio rounded-none text-secondary" />
                                            <span className="peer-checked:text-secondary">Secondary</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="square_text_radio" className="peer form-radio rounded-none text-danger" />
                                            <span className="peer-checked:text-danger">Danger</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="square_text_radio" className="peer form-radio rounded-none text-warning" />
                                            <span className="peer-checked:text-warning">Warning</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="square_text_radio" className="peer form-radio rounded-none text-info" />
                                            <span className="peer-checked:text-info">Info</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="square_text_radio" className="peer form-radio rounded-none text-dark" />
                                            <span className="peer-checked:text-dark">Dark</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel">
                            <div className="mb-5 flex items-center justify-between">
                                <h5 className="text-lg font-semibold dark:text-white-light">Outline Text Color</h5>
                                
                            </div>
                            <div className="mb-5">
                                <div className="space-y-2">
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="classic_text_radio" className="peer form-radio outline-primary" defaultChecked />
                                            <span className="peer-checked:text-primary">Primary</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="classic_text_radio" className="peer form-radio outline-success" />
                                            <span className="peer-checked:text-success">Success</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="classic_text_radio" className="peer form-radio outline-secondary" />
                                            <span className="peer-checked:text-secondary">Secondary</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="classic_text_radio" className="peer form-radio outline-danger" />
                                            <span className="peer-checked:text-danger">Danger</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="classic_text_radio" className="peer form-radio outline-warning" />
                                            <span className="peer-checked:text-warning">Warning</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="classic_text_radio" className="peer form-radio outline-info" />
                                            <span className="peer-checked:text-info">Info</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex gap-2">
                                            <input type="radio" name="classic_text_radio" className="peer form-radio outline-dark" />
                                            <span className="peer-checked:text-dark">Dark</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckboxRadio;
